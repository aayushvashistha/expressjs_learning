const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

async function signup(req, res) {
    const {username, email, password} = req.body
    try {
        const existingUser = userschema.findOne({email: email});
        if (existingUser){
            res.status(400).json({message: "User already exists"});
        }
        const hashedPassword = await bcrypt.hash(password, 8)

        const newUser = await userschema.create({
            username : username,
            email: email,
            password: hashedPassword
        });
        
        let token = jwt.sign({email: newUser.email, id: newUser._id}, process.env.JWT_SECRET);
        res.status(201).json({
            newUser: newUser,
            token: token
        })

    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Something went wrong"})
    }
}
