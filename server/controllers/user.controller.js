const User = require('../models/User.model')

class UserController{
    static async getUser (req, res) {
        try{
            const {userId} = req.params;
            const user = await User.findById(userId)
            res.status(200).json({
                user: {
                    name: user.name,
                    avatar: user.avatar,
                    status: user.status
                }
            })

        }
        catch(err){
            console.log(err)
            res.status(400).json({message: "Error 500"})
        }
    }
}

module.exports = UserController;