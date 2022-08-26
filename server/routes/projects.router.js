const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {

    const query = `SELECT * FROM projects`;
    pool.query(query)
      .then(result => {
        res.send(result.rows);
      })
      .catch(err => {
        console.log('Error in Projects Router GET', err);
        res.sendStatus(500)
      })
  
  });

module.exports = router;