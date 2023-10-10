const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/User')
const ArticleModel = require('./models/Article')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://hughmagallanes77:easypassword@cluster0.ju9auvm.mongodb.net/dbtest")

app.get('/getUsers', (req, res) => {
    UserModel.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.get('/getArticles', (req, res) => {
    ArticleModel.find()
    .then(articles => res.json(articles))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("Server is running")
})