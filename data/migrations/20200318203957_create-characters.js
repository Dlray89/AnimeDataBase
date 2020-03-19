
//up is code that will change the database
exports.up = function(knex) {
  
    return knex.schema
    .createTable('characters', tbl => {
        tbl.increments()//this creates the primary key



        tbl
        .string('name', 100)
        .notNullable()//creates a text field called name which is both require and unique
        .unique()
        .index()
    
    })

};


//down is code that will undo the changes to the shemma
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('characters')
};
