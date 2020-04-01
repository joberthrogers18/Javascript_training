const express = require('express');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = 3333;

function isAuthenticated(req, res,  next) {
  if ( typeof req.headers.authorization !== "undefined"){

    // console.log(req.headers.authorization);
    let token = req.headers.authorization;
    console.log(token);

    let privateKey = fs.readFileSync('./private.pem', 'utf8');

    jwt.verify(token, privateKey, { algorithm: "HS256" }, (err, user) => {

      if(err) {
        res.status(500).json({ error: "Not Authorized"});
        // throw new Error("Not Authorized");
      }
    });

    return next();
  } else {

    return res.status(500).json({ error: "Not uthorized "});
    // throw new Error("Not Authorized");
  }
}

app.get('/', (req, res) => res.send('Hello'));

app.get('/secret', isAuthenticated, (req, res) => {
  res.json({"message": "This is super secret, don't share it!"});
});

app.get('/readme', (req, res) => {
  res.json({"message": "This is open to the world"});
});

app.get('/jwt', (req, res) => {
  let privateKey = fs.readFileSync('./private.pem', 'utf8');
  let token = jwt.sign({"body": "stuff"}, "MySuperSecretPassPhrase", { algorithm: 'HS256'});
  res.send(token);
});

app.listen(PORT, () => {
  console.log('Server running');
});