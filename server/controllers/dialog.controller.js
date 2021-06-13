const Dialog = require('../models/Dialog.model')


class DialogController{
    static async getAll (req, res){
        try{
            const dialog = await Dialog.find();
            res.status(200).json({dialog})
        }
        catch(err){
            console.log(err)
            res.status(400).json({message: "Ошибка"})
        }
    }
    static async create(req,res){
        try{
            const {author, partner} = req.body;
            const exist = await Dialog.findOne({_author: author})
            if(exist){
                return res.status(500).json({message: 'Dialog is already exist!'})
            }
            const dialog = new Dialog({_author: author, _partner: partner})
            await dialog.save();
            res.status(200).json({message: 'Dialog was created!', dialogInfo: dialog})
        }
        catch(err){
            console.log(err)
            res.status(400).json({message: "Ошибка"})
        }
    }
}

module.exports = DialogController;