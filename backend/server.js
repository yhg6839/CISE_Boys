// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const corsOptions = {
  origin: 'http://localhost:3000', // Replace with the actual origin of your frontend
  optionsSuccessStatus: 200, // Some legacy browsers (IE11, various SmartTVs) choke on 204
};
// Middleware
app.use(express.json());
app.use(cors());

// Database connection (Mongoose)
mongoose.connect('mongodb+srv://hughmagallanes77:easypassword@cluster0.ju9auvm.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// API Routes
app.use('/api/', require('./routes/api'));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
