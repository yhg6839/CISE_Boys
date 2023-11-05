require("dotenv").config({ path: "./config.env"});
const path = require('path');
const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');
const users = require('./routes/api/users');
const articles = require('./routes/api/articles');

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

// use Routes
app.use('/api/articles', articles);
app.use('/api/users', users);

app.use(express.static(__dirname+'/Frontend/build'));
app.get('*', (req, res) => {res.sendFile(__dirname+'/Frontend/build/index.html')});

if(process.env.NODE_ENV === "production")
{
    app.use(express.static(path.join(__dirname,"/Frontend/build")))

    app.get("*",(req,res) =>{
      res.sendFile(path.join(__dirname,"Frontend","build","index.html"));
    });
}else{
    app.get("/",(req,res) =>{
        res.send("Api running");
    });
}
const port = process.env.PORT || 3006;

app.listen(port, () => console.log(`Server running on port ${port}`));