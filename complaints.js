const express = require('express');
const router = express.Router();
const db = require('../db');

// Add a new complaint
router.post('/', (req, res) => {
  const { resident_id, issue } = req.body;
  db.query(
    "INSERT INTO complaints (resident_id, issue) VALUES (?, ?)",
    [resident_id, issue],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.send("Complaint added successfully!");
    }
  );
});

// Get all complaints
router.get('/', (req, res) => {
  db.query("SELECT * FROM complaints", (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

module.exports = router;