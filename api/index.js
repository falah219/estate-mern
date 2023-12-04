const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const routes = require('./router')

dotenv.config();

mongoose.connect(process.env.MONGO)
.then(() => {
    console.log("MongoDB terhubung");
})
.catch(err => {
    console.log(err);
})

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.use(routes)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(port, () => {
    console.log("Server listening on port");
});