require('dotenv').config()
const colors = require('colors')

const express = require('express')
const app = express();

const httpServer = require('http').createServer(app)
const io = require('socket.io')(httpServer)

const PORT = process.env.PORT || 5000

app.disable('x-powered-by')

app.use(express.json())



const server = () => {
    try{

        httpServer.listen(PORT, () =>{
            console.log(('Server has been started on port: ' + PORT).blue)
        })

    }
    catch(err){
        console.log(err)
    }
}
server();