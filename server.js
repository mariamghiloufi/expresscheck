const express = require('express')
require('dotenv').config()
const listuser = require("./person")

//const path = require('path')
const app = express()

app.get("/",(req, res)=>{
    res.send(listuser)
})

app.get("/ourservice",(req, res)=>{
    res.render("ourservice",{serv:"allo"})
})

app.get("/contact",(req, res)=>{
    res.render("contactus")
})
app.get("/home",(req, res)=>{
    res.render("home")
})

app.set("view engine", "ejs")

app.listen(process.env.PORT, (err)=>{
if(err){
    throw err
}else{
    console.log('server is running')
}

})