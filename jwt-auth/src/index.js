const express = require('express');
const jwt = require('jsonwebtoken');
require('./services/database/db');

const app = express();
const PORT = 3333;

const auth = require("./services/auth");

app.get('/', (req, res) => res.send('Hello'));

app.get('/secret', auth, (req, res) => {
  res.json({"message": "This is super secret, don't share it!"});
});

app.get('/readme', (req, res) => {
  res.json({"message": "This is open to the world"});
});

app.get('/jwt', (req, res) => {
  let privateKey = fs.readFileSync('./private.pem', 'utf8');
  let token = jwt.sign({ "body": "stuff" }, privateKey, { algorithm: 'HS256'});
  res.send(token);
})

app.listen(PORT, () => {
  console.log('Server running');
});