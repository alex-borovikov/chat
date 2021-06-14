require('dotenv').config();
const jwt = require('jsonwebtoken')

module.exports = (req,res,next) => {
    if(req.method === 'OPTIONS'){
        next()
    }
    try{
        const token = req.headers.authorization.split(' ')[1];
        if(!token){
            res.status(403).json({message: 'You are not logged in!'})
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        req.user = decoded;
        next();
    }
    catch(err){
        console.log(err)
        res.status(400).json({message: "Request error"})
    }
}