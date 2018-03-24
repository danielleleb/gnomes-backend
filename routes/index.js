const express = require('express');
const router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get('/', (req, res, next) => {
  const url = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';

  axios.get(url)
    .then(response => {
      const gnomeData = response.data;
      res.json(gnomeData);
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
