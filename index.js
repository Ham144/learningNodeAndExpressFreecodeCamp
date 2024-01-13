import express from "express";


const app = express()

app.get("/", (req,res) =>{
    res.end("awdwa")
})

app.listen("5000", ()=>{
    console.log(`(terpanggil kalau berhasil) Server is Up`)
})