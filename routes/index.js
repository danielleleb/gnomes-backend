const express = require('express');
const router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get('/', (req, res, next) => {
  const url = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';

  axios.get(url)
    .then(respone => {
      const gnomeData = response.data;
    });
});

module.exports = router;
