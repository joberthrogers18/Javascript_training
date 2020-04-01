const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('./services/database/db');

const User = require('./model/User');

const app = express();
const PORT = 3333;

const auth = require("./services/auth");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post('/signup', async function(req, res){
  const { first, email, password } = req.body;

  const user = await User.create({
    first,
    email,
    password
  });

  return res.json(user);
});

app.post('/signin', async function(req, res) {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if(!user) {
    return res.status(403).json({ error: "User not found!"});
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if(!isMatch){
    return res.json({ error: "Email or user invalid!"});
  }

  const payload = { user: user.name };
  const options = { expiresIn: '2d', issuer: 'https://scotch.io' };
  const secret = require('./services/key').tokenKey;
  const token = jwt.sign(payload, secret, options);

  return res.json({ token });
});

app.get('/list-user', async function(req, res) {
  const users = await User.find();

  return res.json(users);
})

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