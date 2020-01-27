exports.up = function(knex) {
    return knex.schema
        .createTable("authors", tbl => {
            tbl.increments();

            tbl.string("name", 128)
                .notNullable()
                .index();
        })

        .createTable("publishers", tbl => {
            tbl.increments();

            tbl.string("name", 255)
                .notNullable()
                .index();
        })

        .createTable("books", tbl => {
            tbl.increments();

            tbl.string("title", 4000)
                .notNullable()
                .index();

            tbl.integer("publisher_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("publishers")
                .onDelete("RESTRICT") // what happens if the publisher with this id is deleted
                .onUpdate("CASCADE"); // what happens if the publisher id changes

            // CASCADE, SET NULL, DO NOTHING, RESTRICT
        });
};

exports.down = function(knex) {
    // follow the relationships, delete the many side first
    return knex.schema
        .dropTableIfExists("books")
        .dropTableIfExists("publishers")
        .dropTableIfExists("authors");
};
