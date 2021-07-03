require('dotenv').config();
const File = require('../models/File.model')


class FileController {
    static async upload(req, res) {
        try{
            const file = req.files.file;
            const path = process.env.ROOT_PATH + '\\uploads\\';
            const type = file.name.split('.').pop()
            const fileName = file.name.split('.').shift();
            const systemName = fileName + '_' + Date.now() + '.' + type

            const dbFile = new File({
                name: file.name,
                size: file.size,
                systemName,
                type,
                path
            })
            await dbFile.save();
            file.mv(path + systemName) // Dont forget to add the file name, otherwise the file will not be loaded
            res.status(200).json({message: 'File has been uploaded', info: dbFile})
        }
        catch(err){
            console.log(err)
            res.status(400).json({message: "Uploading error"})
        }
    }
}

module.exports = FileController;