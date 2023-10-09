// backend/routes/api.js
const express = require('express');
const router = express.Router();
const Publication = require('../models/publication'); // Import your model

// Define a route to handle form submissions
router.post('/submit', async (req, res) => {
  try {
    // Extract data from the request body
    const {
      title,
      authors,
      source,
      publication_year,
      doi,
      summary,
      linked_discussion,
    } = req.body;

    // Create a new publication document
    const newPublication = new Publication({
      title,
      authors,
      source,
      publication_year,
      doi,
      summary,
      linked_discussion,
    });

    // Save the publication to the database
    const savedPublication = await newPublication.save();

    // Respond with a success message or the saved document
    res.status(201).json(savedPublication);
  } catch (error) {
    // Handle errors and send an error response
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
