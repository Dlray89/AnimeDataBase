//set up middlewear and require express here

const express = require("express")
const helmet = require("helmet")
const morgan = require("morgan")
const cors = require("cors")

//set up routers here 
const characterRouter = require("./data/routes/characterRouter")


const server = express()
//set server up to use middlewear and express
server.use(helmet())
server.use(morgan("dev"))
server.use(cors())
server.use(express.json())
server.use("/api/characters", characterRouter)

server.get("/", (req,res) => {
    res.status(200).json({message:"got the connection. You an continue building"})
})

module.exports = server

