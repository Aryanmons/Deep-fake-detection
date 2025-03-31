const express = require('express');
const cors = require('cors');
const dotenv = require("dotenv")
const { OAuth2Client } = require("google-auth-library");
const jwt = require("jsonwebtoken");
const connectDB = require("./config/database");
const User = require("./model/userModel");
// require('dotenv').config();

dotenv.config();
const userRouter = require('./routes/userRoutes');

const PORT = process.env.PORT || 6000;
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const app = express();

app.use(express.json());
app.use(cors());
connectDB.connect();
app.post('/api/v1/user/google-login', async (req, res) => {
  try {
    const { token } = req.body;
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const { name, email } = ticket.getPayload();
    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ name, email, password: "google-auth" });
    }

    const jwtToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

    res.json({ success: true, token: jwtToken, user });
  } catch (error) {
    console.error("Google login error:", error);
    res.status(400).json({ success: false, message: "Google login failed" });
  }
});
require("./config/database").connect();
app.use('/api/v1/user', userRouter);
app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));

