const express = require('express');
const router = express.Router();

const Users = require('./users-model.js');
const restrictedLogin = require('../auth/restricted-middleware.js');

router.get('/', restrictedLogin, async (req, res) => {
  try {
    const users = await Users.getUsers();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error retrieving users.' });
  }
});

module.exports = router;
