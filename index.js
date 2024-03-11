const express = require ('express')
const signin = require('./userController.js')
const app = express()
const PORT = 3000
const path = require('path');

const mongoose = require('mongoose');
const { log } = require('console');

app.use(express.json());

async function middleware(req, res, next){
    console.log("This is after app.get ");
    next();
}

app.get("/", middleware, (req, res) => {
    // res.send("<h1> This is a homepage </h1>")
    res.sendFile(path.join(__dirname, 'home.html'))
    console.log("**************************", req.headers);
})

mongoose.connect("mongodb://127.0.0.1:27017/user")
.then(() => {
    app.listen(8000, () => {
        console.log("Mongo started on port 27017");
    });
})
.catch((error) => {
    console.log(error);
})

app.listen(PORT, (err) => {
    console.log(`server is listening at ${PORT}`);
    if (err){
        console.error(err);
}})

app.post("/signup", (req, res) => {
res.send("Signed in")
})