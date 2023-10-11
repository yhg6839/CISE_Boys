const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const ArticleModel = require('./models/Article')

const app = express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://hughmagallanes77:easypassword@cluster0.ju9auvm.mongodb.net/dbtest")

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
  

app.get('/getArticles', (req, res) => {
    ArticleModel.find()
    .then(articles => res.json(articles))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("Server is running")
})
