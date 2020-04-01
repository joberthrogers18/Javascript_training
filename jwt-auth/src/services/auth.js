const fs = require('fs');
const jwt = require('jsonwebtoken');

function isAuthenticated(req, res, next) {
  if (typeof req.headers.authorization !== "undefined") {
      let token = req.headers.authorization.split(" ")[1];
      console.log(token)
      let privateKey = fs.readFileSync('./private.pem', 'utf8');

      jwt.verify(token, privateKey, { algorithm: "HS256" }, (err, user) => {

          if (err) {
              res.status(500).json({ error: "Not Authorized" });
              // throw new Error("Not Authorized");
          }
        });

      return next();
  } else {
      res.status(500).json({ error: "Not Authorized" });
      // throw new Error("Not Authorized");
  }
}

module.exports = isAuthenticated;