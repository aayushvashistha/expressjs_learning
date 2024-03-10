const jwt = require('jsonwebtoken')

async function signin(req, res) {
    
}

let token = jwt.sign("emai12l.com", "SECRET")

console.log(token);