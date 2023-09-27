const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const dbUri = process.env.MONGODB_URI;

mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));