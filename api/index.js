import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import routes from './router/index.js'
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

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send("Hello World")
});

app.use(routes);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    })
})

app.listen(port, () => {
    console.log("Server listening on port");
});