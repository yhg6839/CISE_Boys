const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const ArticleModel = require('./models/Article');

const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect("mongodb+srv://hughmagallanes77:easypassword@cluster0.ju9auvm.mongodb.net/dbtest");

app.post('/api/insert-data', async (req, res) => {
  try {
    // Retrieve data from the request body
    const data = req.body;

    // Insert the data into MongoDB
    const result = await ArticleModel.create(data);

    // Respond with a success message or the inserted data
    res.json({ message: 'Data inserted successfully', data: result });
  } catch (error) {
    // Handle errors
    console.error('Error inserting data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/getArticles', async (req, res) => {
  try {
    console.log('Query Parameters:', req.query);
    // Retrieve query parameters for claim and evidence filters (convert to lowercase)
    const claimFilter = req.query.claim ? new RegExp(req.query.claim, 'i') : null;
    const evidenceFilter = req.query.evidence ? new RegExp(req.query.evidence, 'i') : null;

    // Define the filter object
    const filters = {};

    // Add the claim filter if provided
    if (claimFilter) {
      filters.claim = claimFilter;
    }

    // Add the evidence filter if provided
    if (evidenceFilter) {
      filters.evidence = evidenceFilter;
    }

    // Fetch articles based on the filters
    const articles = await ArticleModel.find(filters);

    res.json(articles);
  } catch (error) {
    console.error('Error fetching articles:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(3001, () => {
  console.log("Server is running");
});
