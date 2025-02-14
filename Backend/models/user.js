const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String },
  profilePicture: { type: String },
  isHost: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  listings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Listing' }],
  bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Booking' }],
  tokens: [{ token: { type: String, required: true } }],
});

// Generate auth token
userSchema.methods.generateAuthToken = async function() {
  const user = this;
  const token = jwt.sign(
    { userId: user._id.toString() },
    process.env.JWT_SECRET,
    { expiresIn: '24h' }
  );

  user.tokens = user.tokens.concat({ token });
  await user.save();

  return token;
};

// Hash password before saving
userSchema.pre('save', async function(next) {
  const user = this;
  
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 10);
  }
  
  next();
});

// Remove sensitive data when converting to JSON
userSchema.methods.toJSON = function() {
  const user = this;
  const userObject = user.toObject();

  delete userObject.password;
  delete userObject.tokens;

  return userObject;
};

// Fixed findByCredentials method
userSchema.statics.findByCredentials = async function(email, password) {
  try {
    const user = await this.findOne({ email });
    
    if (!user) {
      throw new Error('Invalid login credentials');
    }
    
    const isMatch = await bcrypt.compare(password, user.password);
    
    if (!isMatch) {
      throw new Error('Invalid login credentials');
    }
    
    return user;
  } catch (error) {
    throw new Error('Invalid login credentials');
  }
};

const User = mongoose.model('User', userSchema,  'users');
module.exports = User;
