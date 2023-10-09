// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware
app.use(express.json());

// Database connection (Mongoose)
mongoose.connect('mongodb+srv://hughmagallanes77:easypassword@cluster0.ju9auvm.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// API Routes
app.use('/api', require('./routes/api'));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
