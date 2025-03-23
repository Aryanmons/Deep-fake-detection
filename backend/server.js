const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
require('dotenv').config();
const PORT = process.env.PORT || 7000;

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).json({ message: 'API is working' });
});
require("./config/database").connect();
app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));

