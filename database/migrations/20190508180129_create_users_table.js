
exports.up = function(knex, Promise) {
    // CREATE TABLE `users` (
    //     `id` INTEGER,
    //     `username` STRING,
    //     `password` STRING,
    //     PRIMARY KEY (`id`)
    //   );  
    return knex.schema.createTable('users', users => {
        users.increments();

        users
            .string('username', 128)
            .notNullable()
            .unique();

        users
            .string('password', 128)
            .notNullable()
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
};
