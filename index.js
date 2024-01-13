import express from "express";
import router from "./app.js";
import http from "http"
const app = express()
const server = http.createServer( (req,res) =>{
    if (req.url === "/home") {
        res.end("hello guys this is the home page")
    }
    else if(req.url === "/about"){
        res.end("You can read about us here")
    }
    else{
        res.end("page you are looking for is not Found")
    }
})


// app.use("/", router)

server.listen("5000", ()=>{
    console.log(`(terpanggil kalau berhasil) Server is Up`)
})