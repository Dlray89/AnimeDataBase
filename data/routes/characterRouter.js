// import express here
const express = require("express")


//connect character model
const anime = require("./character.model")

//connect router to express
const router = express.Router()


//set-up HTTP request GET, POST, PUT, DELETE

//get request
router.get("/", (req,res) => {
    anime.find().then(characters => {
        res.status(202).json(characters)
    })
    .catch(error =>{
        res.status(500).json({errorMessage: `${error} we could not find the information you're looking for`})
    })
})


//get request by id
router.get("/:id", (req,res) =>{
    const { id } = req.params
    anime
    .findById(id)
    .then(character => {
        res.status(200).json(character)
    })
    .catch(error => {
        res.status(500).json({errorMessage: `${error} could not find character`})
    })
})


//POST request
router.post("/", (req,res) => {
    const createCharacter = req.body
    anime.add(createCharacter)
    .then(character => {
        res.status(200).json(character)
    })
    .catch(error => {
        res.status(500).json({errorMessage: `${error} could not post character to list`})
    })
})

module.exports = router