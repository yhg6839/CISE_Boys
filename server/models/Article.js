const mongoose = require('mongoose')

const ArticleSchema = new mongoose.Schema({
    title: String,
    authors: [String],
    source: String,
    pubyear: String,
    doi: String,
    claim: String,
    evidence: String
})

const ArticleModel = mongoose.model("articles", ArticleSchema)
module.exports = ArticleModel