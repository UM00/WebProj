//const express = require('express')

// Importing user route

// const router = require('router')

// const bodyParser = require('body-parser')
const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes/users");
const { default: mongoose } = require("mongoose");

const app = express()
const port = 3001

const cors = require('cors');
app.use(cors());
require("dotenv").config();
app.use(express.urlencoded({extended:false}));


app.use(bodyParser.json())
// Adding a Router
app.use('/', router);

app.get('/', (req, res) => {
    res.send('Hello Universe!')
})

app.get('/todos', (req, res) => {
    res.send('A list of todo items will be returned')
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.send('Posting a Request')
})

mongoose.connect(
    "mongodb+srv://umoo:umoo@database.hfh6yj6.mongodb.net/ADDMIN"
  )
  .then(() => {
    app.listen(port,()=>{
        console.log(`App  is listening on port ${port}`);
    });

  })
  .catch((err) => {
    console.log(err);
  });

app.use('/delete',router);


