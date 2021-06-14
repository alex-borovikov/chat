require('dotenv').config();
const User = require('../models/User.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const {validationResult} = require('express-validator');


class AuthController{
    static async register(req,res){
        const {name, surname, email, password} = req.body;

        const candidate = await User.findOne({email});
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
        res.status(200).json({message: 'Registration is successful!'})

    }
    static async login(req,res){
         const {email, password} = req.body;
         const user = await User.findOne({email})
         if(!user){
             return res.status(400).json({message: 'Email is incorrect'})
         }
         const comparePassword = bcrypt.compareSync(password, user.password)
         if (!comparePassword){
             return res.status(400).json({message: 'Wrong password!'})
         }

         const token = jwt.sign({id: user._id}, process.env.SECRET_KEY, {expiresIn: '24h'})
         res.json({
             token,
             message: 'Login successful',
             user: {
                 displayName: user.name + ' ' + user.surname,
                 id: user._id,
                 dialogs: user.dialogs
             }
         })

    }
    static async checkAuth(req,res){
         try{
             const user = await User.findOne({_id: req.user.id})
             const token = jwt.sign({id: user._id}, process.env.SECRET_KEY, {expiresIn: '24h'})

             res.json({
                 token,
                 user: user
             })
         }
         catch(err){
             console.log(err)
             res.status(400).json({message: "Ошибка"})
         }
    }
    static async checkGoogleAuth(req,res){
        try{
            const {email} = req.query;
            const user = await User.findOne({email});
            res.status(200).json({
                message: 'Success!',
                user: {
                    displayName: user.name + ' ' + user.surname,
                    id: user._id,
                    dialogs: user.dialogs
                }})
        }
        catch(err){
            console.log(err)
        }
    }

}

module.exports = AuthController;