const router = require('express').Router();

router.get('/a', (req, res) => {
  try {
    res.send('you must be logged in if you are seeing this');
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});
router.get('/b', (req, res) => {
  try {
    res.send('you must be logged in if you are seeing this');
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
