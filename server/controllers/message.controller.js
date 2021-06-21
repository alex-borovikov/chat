const Message = require('../models/Message.model')

class MessageController {
    static async getMessage(req,res){
        try{
            const {dialogueId} = req.params;
            const message = await Message.find({dialogueId})
            res.status(200).json({messages: message})
        }
        catch(err){
            console.log(err)
            res.status(400).json({message: "Error. Message did not created"})
        }
    }
    static async create(req,res){
        try{
            const {dialogueId, author, text} = req.body;
            const message = new Message({dialogueId, author, text})
            await message.save();
            res.status(200).json({message: 'Message was created!', response: message})
        }
        catch(err){
            console.log(err)
            res.status(400).json({message: "Error. Message did not created"})
        }
    }

}
module.exports = MessageController;