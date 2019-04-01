const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const Users = require('../users/users-model.js');

router.post('/', async (req, res) => {
  const user = req.body;
  const hash = bcrypt.hashSync(user.password, 8);
  user.password = hash;

  try {
    const addedUser = await Users.addUser(user);
    res.status(201).json(addedUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'User could not be added.' });
  }
});

module.exports = router;
