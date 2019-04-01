const faker = require('faker');
const bcrypt = require('bcryptjs');

// function generateRandomCredentials(amount) {
//   const usersArray = [];
//   for (let i = 0; i < amount; i++) {
//     let username = faker.internet.userName();
//     let password = bcrypt.hashSync(faker.internet.password(), 8);

//     usersArray.push({ username, password });
//   }
//   return usersArray;
// }

function creds(amount) {
  function* credGenerator() {
    yield {
      username: faker.internet.userName(),
      password: bcrypt.hashSync(faker.internet.password(), 8)
    };
  }

  const usersArray = [];
  for (let i = 0; i < amount; i++) {
    usersArray.push(credGenerator().next().value);
  }
  return usersArray;
}

console.log(creds(100));

exports.seed = function(knex) {
  return knex('users').insert(creds(100));
};
