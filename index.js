const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const routes = require('./routes');

const app = express();

const PORT = process.env.PORT
const TEXT = process.env.TEXT;

app.get('/test', function (req, res) {
  res.send(`getting response from port ${PORT} with your custom text - ${TEXT}`);
});

app.use(bodyParser.json());

app.use('/', routes);

app.listen(PORT, () => {
  console.log('Server started on port 3000');
});
