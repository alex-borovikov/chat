require('dotenv').config();
const User = require('../models/User.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const {validationResult} = require('express-validator');


class AuthController{
    static async register(req,res){
        try{
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
        catch(err){
            console.log(err)
            res.status(400).json({message: "Ошибка"})
        }

    }
    static async login(req,res){
         try{
             const {email, password} = req.body;
             const user = await User.findOne({email})
             if(!user){
                 return res.status(400).json({message: 'Email is incorrect'})
             }
             const comparePassword = bcrypt.compareSync(password, user.password)
             if (!comparePassword){
                 return res.status(400).json({message: 'Wrong password!'})
             }
             //Set user online status
             await User.updateOne(
                 {_id: user._id},
                 {
                     $set: {
                         status: true
                     }
                 }
             )

             const token = jwt.sign({id: user._id}, process.env.SECRET_KEY, {expiresIn: '24h'})
             res.json({
                 token,
                 message: 'Login successful',
                 user: {
                     displayName: user.name + ' ' + user.surname,
                     id: user._id,
                     dialogs: user.dialogs,
                     avatar: user.avatar
                 }
             })
         }
         catch(err){
             console.log(err)
             res.status(400).json({message: "Ошибка"})
         }

    }
    static async checkAuth(req,res){
         try{
             const user = await User.findOne({_id: req.user.id})
             const token = jwt.sign({id: user._id}, process.env.SECRET_KEY, {expiresIn: '24h'})

             res.json({
                 token,
                 user: {
                     displayName: user.name + ' ' + user.surname,
                     id: user._id,
                     dialogs: user.dialogs,
                     avatar: user.avatar
                 }
             })
         }
         catch(err){
             console.log(err)
             res.status(400).json({message: "Ошибка"})
         }
    }
    static async checkGoogleAuth(req,res){
        try{
            //Firebase returns a JSON string
            const userInfo = JSON.parse(req.query.userInfo);
            const user = await User.findOne({email: userInfo.email});
            if(!user){
                //If user login at first time with Google or anything else - we dont have any info about him in database
                const createUser = new User({
                    name: userInfo.displayName,
                    surname: '',
                    email: userInfo.email,
                    avatar: userInfo.photoURL
                })
                await createUser.save()
            }
            //Set user online status
            await User.updateOne(
                {_id: user._id},
                {
                    $set: {
                        status: true
                    }
                }
            )
            const data = {
                message: 'Success!',
                user: {
                    displayName: user?.name + user?.surname ,
                    id: user?._id ,
                    avatar: user?.avatar
                }
            }
            res.status(200).json(data)
        }
        catch(err){
            console.log(err)
        }
    }
    static async setStatus(req,res){
        try{
            const { id } = req.body;
            const update = await User.updateOne(
                {_id: id},
                {
                    $set: {
                        status: false
                    }
                }
            )
            console.log(update)
            if(!update.ok){
                return res.status(400).json({message: 'Request error'})
            }
            res.json({message: 'Successful update!'})
        }
        catch(err){
            console.log(err)
            res.status(400).json({message: "Ошибка"})
        }
    }

}

module.exports = AuthController;