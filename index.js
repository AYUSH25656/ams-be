const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/residents', require('./routes/residents'));
app.use('/complaints', require('./routes/complaints'));
app.use('/bills', require('./routes/bills'));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});