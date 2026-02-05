require('dotenv').config()
const express = require('express')
const cors = require('cors')
require('./config/db')
const routes = require('./routes/routing')

const cookpediaServer = express()
cookpediaServer.use(cors())
cookpediaServer.use(express.json())
cookpediaServer.use(routes)
cookpediaServer.use('/uploads', express.static('uploads'))



const PORT = 3000

cookpediaServer.listen(PORT,()=>{
    console.log("cookpedia Server Started......waiting for client request");
})

cookpediaServer.get('/',(req,res)=>{
    res.status(200).send('<h1>cookpedia Server Started......waiting for client request</h1/>')
})


