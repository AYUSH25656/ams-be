const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/', (req, res) => {
  const { name, flat_no, contact, role } = req.body;
  db.query(
    "INSERT INTO residents (name, flat_no, contact, role) VALUES (?,?,?,?)",
    [name, flat_no, contact, role],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.send("Resident added successfully!");
    }
  );
});

router.get('/', (req, res) => {
  db.query("SELECT * FROM residents", (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// Test route to confirm DB connection
router.get('/test', (req, res) => {
  db.query("SELECT 1", (err, result) => {
    if (err) return res.status(500).send(err);
    res.send("DB working fine!");
  });
});

module.exports = router;