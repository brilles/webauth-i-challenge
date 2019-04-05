const db = require('../database/dbConfig.js');

module.exports = {
  getUsers,
  addUser,
  findUser
};

function getUsers() {
  return db('users');
}

function addUser(user) {
  return db('users')
    .insert(user)
    .then(user);
}

function findUser(username) {
  return db('users')
    .where(username)
    .first();
}
