const User = require('../models/User.model')

module.exports = async (req, res) => {
    try {
        const name = req.body.name.trim();
        const result = await User.find({name})
        if(result.length < 1){
            return res.status(200).json({message: 'No results', resultArray: []})
        }
        res.status(200).json({message: '', resultArray: result})
    }
    catch(err){
        console.log(err)
        res.status(500).json({message: "Ошибка"})
    }
}