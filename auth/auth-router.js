const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const Users = require('../users/users-model.js');

router.post('/register', async (req, res) => {
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

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await Users.findUser({ username });
    if (user && bcrypt.compareSync(password, user.password)) {
      res.status(200).json({ message: 'Logged in' });
    } else {
      res.status(401).json({ message: 'You shall not pass!' });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
