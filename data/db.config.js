// require knex here
const knex = require("knex")

//require knexfile 
const config = require('../knexfile')

//assign db to knex(config.development)
const db = knex(config.development)

module.exports = db

