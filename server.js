require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Product = require('./models/productModel.js');
const productRoute = require('./routes/productRoute.js');

const port = process.env.PORT || 5500;

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

// Home Route
app.get('/', (req, res) => {
  res.send('Hello from Node API server');
});

// Product route
app.use('/api/products', productRoute)

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log('Connected to DB successfully');
    app.listen(port, console.log(`server running on port ${port}`));
  })
  .catch((err) => console.log(err.message, `\nConnection to DB failed.`));
