const express = require("express");
const { OAuth2Client } = require("google-auth-library");
const jwt = require("jsonwebtoken");
const User = require("../config/database"); // Import your user model
require("dotenv").config();

const router = express.Router();
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Google Login Route
router.post("/google-login", async (req, res) => {
  const { token } = req.body;

  try {
    // Verify Google Token
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const { name, email } = ticket.getPayload();

    // Check if user already exists
    let user = await User.findOne({ email });

    if (!user) {
      // Create new user
      user = new User({ name, email, password: "google-auth" });
      await user.save();
    }

    // Generate JWT Token
    const jwtToken = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "7d" });

    res.json({ success: true, user, token: jwtToken });
  } catch (error) {
    console.error("Google Login Error:", error);
    res.status(400).json({ success: false, message: "Google login failed" });
  }
});

module.exports = router;
