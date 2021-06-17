require('dotenv').config();
const jwt = require('jsonwebtoken')
const admin = require('../configs/firebase.config')

class AuthMiddleware {
    static auth (req,res,next) {
        if(req.method === 'OPTIONS'){
            next()
        }
        try{
            const token = req.headers.authorization.split(' ')[1];
            if(token === 'null'){
                return res.status(403).json({message: 'You are not logged in!'})
            }
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            req.user = decoded;
            next();
        }
        catch(err){
            console.log(err)
        }
    }
    static async authWithGoogle(req,res,next){
        try{
            const token = req.headers.authorization.split(' ')[1];
            const decode = await admin.auth().verifyIdToken(token)
            if(!decode){
                return res.status(403).json({message: 'You are not logged in! !'})
            }
            next()
        }
        catch(err){
            console.log(err)
        }
    }
}

module.exports = AuthMiddleware;