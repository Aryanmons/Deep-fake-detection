const express = require('express');
const { registerUser ,loginUser} = require('../controllers/userControllers'); // Use require

const userRouter = express.Router();
userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);


module.exports = userRouter;
