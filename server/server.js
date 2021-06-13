require('dotenv').config()
const colors = require('colors')
const mongoose = require('mongoose')
const cors = require('cors')

const express = require('express')
const app = express();

const httpServer = require('http').createServer(app)
const io = require('socket.io')(httpServer)

const PORT = process.env.PORT || 5000

app.disable('x-powered-by')

const authRouter = require('./routes/auth.route')
const dialogRouter = require('./routes/dialogs.route')
const messageRouter = require('./routes/message.route')
const searchRouter = require('./routes/search.route')

app.use(cors())
app.use(express.json())
app.use('/api/auth', authRouter)
app.use('/api/dialog', dialogRouter)
app.use('/api/message', messageRouter)
app.use('/api/user/search', searchRouter)



const server = () => {
    try{
        mongoose.connect(
            `mongodb+srv://alex:${process.env.DB_PASSWORD}@cluster0.rvw8v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        )
        httpServer.listen(PORT, () =>{
            console.log(('Server has been started on port: ' + PORT).blue)
        })

    }
    catch(err){
        console.log(err)
    }
}
server();