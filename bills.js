const express = require('express');
const router = express.Router();
const db = require('../db');

// Add a new bill
router.post('/', (req, res) => {
  const { resident_id, amount, due_date } = req.body;
  db.query(
    "INSERT INTO bills (resident_id, amount, due_date) VALUES (?, ?, ?)",
    [resident_id, amount, due_date],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.send("Bill added successfully!");
    }
  );
});

// Get all bills
router.get('/', (req, res) => {
  db.query("SELECT * FROM bills", (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

module.exports = router;