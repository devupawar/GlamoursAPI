const express=require('express')
const mongoose=require('mongoose')
const bodyparser=require("body-parser")
const cors=require('cors')

const server=express()

server.use(cors())
server.use(bodyparser.json())
server.use(bodyparser.urlencoded({extended:false}))

mongoose.connect("mongodb://127.0.0.1:27017/demo-db",{
    useNewUrlParser:true
}).then((result) => {
    console.log("DB Connected")
}).catch((err) => {
    console.log("DB not connected")
});

server.get('/',(req,res)=>{
    res.send("Hello")
})

server.get('/user',(req,res)=>{
    res.send("Hello User")
})


const routes=require('./Src/Routes/Routes')
server.use("/api/",routes)


server.listen(5000,()=>{
    console.log("server started")
})