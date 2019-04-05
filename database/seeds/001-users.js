const faker = require('faker');
const bcrypt = require('bcryptjs');

function creds(amount) {
  const usersArray = [];
  for (let i = 0; i < amount; i++) {
    usersArray.push({
      username: faker.internet.userName(),
      password: bcrypt.hashSync(faker.internet.password(), 8)
    });
  }
  return usersArray;
}

console.log(creds(100));

exports.seed = function(knex) {
  return knex('users').insert(creds(100));
};
