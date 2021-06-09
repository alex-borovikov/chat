const User = require('../models/User.model')
const bcrypt = require('bcrypt')
const {validationResult} = require('express-validator');


class AuthController{
     static async register(req,res){
        const {name, surname, email, password} = req.body;

        const candidate = User.findOne({email});
        if(candidate){
            return res.status(400).json({message: 'User with this email is exist!'})
        }
        //Check request fields for errors. This is the second validation after react-formik
        const errors = validationResult(req)
         if(!errors.isEmpty()){
             return res.status(400).json({message: errors.array()[0].msg})
         }

        const hashPass = bcrypt.hashSync(password, 5);
        const user = new User({name, surname, email, password: hashPass})
        await user.save();
        res.status(200).json({message: 'Registration is successfull!'})

    }
     static login(req,res){

    }
     static auth(req,res){

    }
}

module.exports = AuthController;