import fs from 'fs'
import http from 'http'

http.createServer(
    (req,res)=>{
        const fileStream = fs.createReadStream("./contoh.txt", "utf8")
        fileStream.on("open", ()=>{
            fileStream.pipe()
        })
        fileStream.on("error", (err) =>{
            res.end(err)
        })
    }
).listen(5000, ()=> console.log(`=======================`))
