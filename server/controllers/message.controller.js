const Message = require('../models/Message.model')

class MessageController {
    static async create(req,res){
        try{
            const {dialogId, author, text} = req.body;
            const message = new Message({dialogId, author, text})
            await message.save();
            res.status(200).json({message: 'Message was created!'})
        }
        catch(err){
            console.log(err)
            res.status(400).json({message: "Error. Message did not created"})
        }
    }

}
module.exports = MessageController;