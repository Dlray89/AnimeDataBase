const animeDB = require('../db.config')

module.exports = {
    find,
    findById,
    add,
}

function find(){
    return animeDB("characters")//find the character and return the object
}

function findById(id){
    return animeDB("characters") //returns the database
    .where({ id })//locates the id of the character
    .first()//displaying in order
}

function add(characters){
    return animeDB("characters")//grab characters from the database
    .insert(characters, "id") //insertanew character with a new id into the body
    .then(ids => ({ id: ids[0] }))//then let id start in order from 0.
}




