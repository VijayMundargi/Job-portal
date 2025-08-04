const User = require('../models/User');
const bcrypt = require('bcrypt');

// POST: Register logic
const createAccount = async (req, res) => {
  const { name, email, password, phoneNumber } = req.body;

  try {
    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(409).json({ message: "User already exists" });
    }

    const phoneExists = await User.findOne({ phoneNumber });
    if (phoneExists) {
      return res.status(400).json({ msg: "Phone number is already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      phoneNumber,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ message: "Account created successfully" });
  } catch (err) {
    console.log('error in registering user', err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// POST: Login logic
const loginAccount = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid password" });
    }

    const { password: _, ...safeUser } = user._doc;

    res.status(200).json({ msg: "Login successful", user: safeUser });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server Error" });
  }
};

module.exports = {
  createAccount,
  loginAccount,
};
