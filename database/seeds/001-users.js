
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'Joe', password: "12345"},
        {id: 2, username: 'Jim', password: "12345"},
        {id: 3, username: 'Mike', password: "12345"}
      ]);
    });
};
