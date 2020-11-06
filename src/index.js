const express = require('express');
const data = require('./data.json');

const app = express();

app.get('/', (request, response) => {
  response.json(data);
});

app.listen(3000);
