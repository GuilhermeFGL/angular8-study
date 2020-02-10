const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const department_controller = require('./department_controller');
const product_controller = require('./product_controller');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect(
    'mongodb://localhost:27017/http_crud',
    { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/departments', department_controller);
app.use('/products', product_controller);

app.listen(3000);

