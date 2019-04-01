const faker = require('faker');
const bcrypt = require('bcryptjs');

function generateRandomCredentials(amount) {
  const usersArray = [];
  for (let i = 0; i < amount; i++) {
    let username = faker.internet.userName();
    let password = bcrypt.hashSync(faker.internet.password(), 8);

    usersArray.push({ username, password });
  }
  return usersArray;
}

exports.seed = function(knex) {
  return knex('users').insert(generateRandomCredentials(100));
};
