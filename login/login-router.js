const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const Users = require('../users/users-model.js');

router.post('/', async (req, res) => {
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
