const express = require ('express')
const app = express()
const PORT = 3000
const path = require('path');

async function middleware(req, res, next){
    console.log("This is after app.get ");
    next();
}

app.get("/", middleware, (req, res) => {
    // res.send("<h1> This is a homepage </h1>")
    res.sendFile(path.join(__dirname, 'home.html'))
    console.log("**************************", req.headers);
})

app.listen(PORT, (err) => {
    console.log(`server is listening at ${PORT}`);
    if (err){
        console.error(err);
}})