// backend/models/Publication.js
const mongoose = require('mongoose');

const publicationSchema = new mongoose.Schema({
  title: String,
  authors: [String],
  source: String,
  publication_year: Number,
  doi: String,
  summary: String,
  linked_discussion: String,
});

const Publication = mongoose.model('Publication', publicationSchema);

module.exports = Publication;
