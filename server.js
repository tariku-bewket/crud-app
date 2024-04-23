require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log('Connected to DB successfully');
    app.listen(3000, console.log('server running on port 3000'));
  })
  .catch((err) => console.log(err.message, `\nConnection to DB failed.`));

app.get('/', (req, res) => {
  res.send('Hello from Node API server');
});
