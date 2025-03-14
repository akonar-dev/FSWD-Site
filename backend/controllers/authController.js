const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { validateUser } = require('../utils/validate');

const registerUser = async (req, res) => {
  console.log("Received request:", req.body);
  const { username, email, password, confirmPassword } = req.body;

  // Validate input fields
  const validation = validateUser({ username, email, password, confirmPassword });
  if (!validation.success) {
    return res.status(400).json({ message: "Validation error", errors: validation.errors });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }

  // Check if user already exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: 'User already exists' });
  }

  // Save user to database
  const user = new User({ username, email, password });
  await user.save();

  // Generate JWT Token
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '30d' });

  res.status(201).json({ token, message: 'User registered successfully' });
};

const authUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user || !(await user.matchPassword(password))) {
    return res.status(400).json({ message: 'Invalid email or password' });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '30d' });

  res.status(200).json({ token, message: 'User logged in successfully' });
};

module.exports = { registerUser, authUser };
