require('dotenv').config()
const colors = require('colors')
const mongoose = require('mongoose')
const cors = require('cors')
const fileUpload = require('express-fileupload')

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

//Models
const Message = require('./models/Message.model')
const Dialogue = require('./models/Dialogue.model')
const User = require('./models/User.model')

const authRouter = require('./routes/auth.route')
const dialogueRouter = require('./routes/dialogues.route')
const messageRouter = require('./routes/message.route')
const searchRouter = require('./routes/search.route')
const userRouter = require('./routes/user.route')
const fileRouter = require('./routes/file.router')




app.use(cors())
app.use(fileUpload())
app.use(express.json())
app.use('/api/auth', authRouter)
app.use('/api/dialogue', dialogueRouter)
app.use('/api/message', messageRouter)
//Only for users search
app.use('/api/user/search', searchRouter)
//Only for API SEARCH
app.use('/api/user/get', userRouter)
//File loading
app.use('/api/user/file', fileRouter)

let users = [];

const addUsers = (userId, socketId) => {
    !users.some((user) => user.userId === userId) &&
     users.push({userId, socketId})
}
const removeUser = socketId => users = users.filter( user => user.socketId !== socketId )
const getUser = id => users.find( user => user.userId === id)

const server = () => {

    io.on('connection',  socket => {
        // We add users to array when connected
        socket.on('addUser', userId => {
            addUsers(userId, socket.id)
        })
        //Receive info from client and send them the message
        socket.on('sendMessage', async ({senderId, receiver, text, dialogueId}) => {
            //Find receiver by user id and getting user socket id
            const receiverSocketId = getUser(receiver)?.socketId
            const senderSocketId = getUser(senderId)?.socketId
            const message = new Message({dialogueId, author: senderId, text})
            await message.save();

            //Set new last message for the dialogue
            const updateLastMessageInDialogue = await Dialogue.updateOne(
                {
                    _id: dialogueId
                },
                {
                    $set: {
                        lastMessage: text,
                        lastMessageTime: Date.now()
                    }
                }
            )

            // Send message to all user from chat
            io.to( receiverSocketId ).emit('getMessage', message)
            io.to( senderSocketId ).emit('getMessage', message)
        })

        socket.on('disconnect', async () => {
            removeUser(socket.id)
            io.emit('getUsers', users)
        })
    })

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