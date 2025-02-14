// auth.js
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization');
    
    if (!token) {
      throw new Error('No token provided');
    }

    const tokenString = token.replace('Bearer ', '');
    
    try {
      const decoded = jwt.verify(tokenString, process.env.JWT_SECRET);
      const user = await User.findById(decoded.userId);

      if (!user) {
        throw new Error('User not found');
      }

      // Check if token exists in user's tokens array
      const tokenExists = user.tokens.some(t => t.token === tokenString);
      if (!tokenExists) {
        throw new Error('Invalid token');
      }

      req.token = tokenString;
      req.user = user;
      next();
    } catch (jwtError) {
      console.error('JWT verification error:', jwtError);
      throw new Error('Invalid token');
    }
  } catch (error) {
    console.error('Auth middleware error:', error.message);
    res.status(401).json({ error: 'Please authenticate.' });
  }
};

module.exports = auth;
