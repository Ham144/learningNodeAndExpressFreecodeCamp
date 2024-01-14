import express from "express";
import router from "./app.js";
import http from "http"
import { readFile, writeFile } from "fs";
import path from "path";
const app = express()


let temp = "";
//contoh sintax asycronous promise
const fetch = (path) =>{
    return new Promise((resolve, reject) =>{
        readFile(path, "utf8", (err, data)=>{
            if (err) {
                reject(`"error happen when reading file" ${err}`)
            }
            else{
                resolve(
                    console.log(data)
                )
            }
        })
    })
}

// const getData = async(path) =>{
//     try {
//         temp = await fetch(path)
//         return temp
//     } catch (err) {
//         return err
//     }
// }

const getData = async(path)=>{
    fetch(path)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}
getData("./contoh.txt")
getData("./contoh2.txt")

app.get("/getdata", (req,res) =>{
    const data = getData("./contoh.txt")
    res.send(data)
})
// const server = http.createServer( (req,res) =>{
//     if (req.url === "/home") {
//         res.end("hello guys this is the home page")
//     }
//     else if(req.url === "/about"){
//         res.end("You can read about us here")
//     }
//     else{
//         res.end("page you are looking for is not Found")
//     }
// })


app.listen(5000, ()=>{
    console.log(`==========================`)
})