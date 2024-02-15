const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const registerUser = async (req, res, next) => {
  try {
    // Hash password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({ username: req.body.username, email: req.body.email, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    next(err);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    const token = jwt.sign({ userId: user._id }, 'your_secret_key', { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (err) {
    next(err);
  }
};

module.exports = { registerUser, loginUser };