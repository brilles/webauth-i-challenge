const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const Users = require('./users-model.js');

router.get('/', restrictedLogin, async (req, res) => {
  try {
    const users = await Users.getUsers();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error retrieving users.' });
  }
});

async function restrictedLogin(req, res, next) {
  const { username, password } = req.headers;

  if (username && password) {
    try {
      const user = await Users.findUser({ username });
      if (user && bcrypt.compareSync(password, user.password)) {
        next();
      } else {
        res.status(401).json({ message: 'You shall not pass!' });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(401).json({ message: 'Must provide credentials.' });
  }
}

module.exports = router;
