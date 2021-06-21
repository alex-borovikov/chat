require('dotenv').config()
const colors = require('colors')
const mongoose = require('mongoose')
const cors = require('cors')

const express = require('express')
const app = express();

const httpServer = require('http').createServer(app)
const io = require('socket.io')(httpServer, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
})

const PORT = process.env.PORT || 5000

app.disable('x-powered-by')

const authRouter = require('./routes/auth.route')
const dialogueRouter = require('./routes/dialogues.route')
const messageRouter = require('./routes/message.route')
const searchRouter = require('./routes/search.route')
const userRouter = require('./routes/user.route')


app.use(cors())
app.use(express.json())
app.use('/api/auth', authRouter)
app.use('/api/dialogue', dialogueRouter)
app.use('/api/message', messageRouter)
//Only for users search
app.use('/api/user/search', searchRouter)
//Only for API SEARCH
app.use('/api/user/get', userRouter)



const server = () => {
    try{
        mongoose.connect(
            `mongodb+srv://alex:${process.env.DB_PASSWORD}@cluster0.rvw8v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        )

        io.on('connection', socket => {
            // console.log('Client was enter to chat')

            socket.emit('CONNECT:GREETING', 'Test socket command!')

            socket.on('CLIENT:SEND_MESSAGE', message => {
                // console.log(message)
            })
        })






        httpServer.listen(PORT, () =>{
            console.log(('Server has been started on port: ' + PORT).blue)
        })
    }
    catch(err){
        console.log(err)
    }
}
server();