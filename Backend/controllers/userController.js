// controllers/userController.js
const User = require('../models/user');
const { validationResult } = require('express-validator');

exports.register = [
  // Validation middleware remains the same
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { name, email, password } = req.body;
      
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: 'User already exists' });
      }

      const user = new User({ name, email, password });
      await user.save();
      
      const token = await user.generateAuthToken();
      
      res.status(201).json({
        user: user.toJSON(),
        token
      });
    } catch (error) {
      console.error('Registration error:', error);
      res.status(500).json({ error: 'Server error during registration' });
    }
  }
];

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const user = await User.findByCredentials(email, password);
    const token = await user.generateAuthToken();
    
    res.json({
      user: user.toJSON(),
      token
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(400).json({ error: 'Invalid login credentials' });
  }
};

exports.logout = async (req, res) => {
  try {
    // Remove the current token
    req.user.tokens = req.user.tokens.filter(
      token => token.token !== req.token
    );
    
    await req.user.save();
    res.json({ message: 'Logged out successfully' });
  } catch (error) {
    console.error('Logout error:', error);
    res.status(500).json({ error: 'Server error during logout' });
  }
};

exports.logoutAll = async (req, res) => {
  try {
    // Remove all tokens
    req.user.tokens = [];
    await req.user.save();
    res.json({ message: 'Logged out from all devices' });
  } catch (error) {
    console.error('Logout all error:', error);
    res.status(500).json({ error: 'Server error during logout' });
  }
};


exports.getProfile = async (req, res) => {
  try {
    // Get user profile with bookings
    const user = await User.findById(req.user._id)
      .populate({
        path: 'bookings',
        populate: {
          path: 'listing',
          select: 'title image_urls location price_per_night'
        }
      });

    res.json({
      user: user.toJSON(),
      bookings: user.bookings || []
    });
  } catch (error) {
    console.error('Profile fetch error:', error);
    res.status(500).json({ error: 'Error fetching profile data' });
  }
};