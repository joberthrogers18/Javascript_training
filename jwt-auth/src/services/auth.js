const fs = require('fs');
const jwt = require('jsonwebtoken');

function isAuthenticated(req, res, next) {
  let token = req.headers.authorization.split(" ")[1];
  if (token) {
      console.log(token)
      // let privateKey = fs.readFileSync('./private.pem', 'utf8');

      const options = {
        expiresIn: '2d',
        issuer: 'https://scotch.io'
      };

      try {
        // verify makes sure that the token hasn't expired and has been issued by us
        const result = jwt.verify(token, require('./key').tokenKey, options);

        // Let's pass back the decoded token to the request object
        req.decoded = result;
        // We call next to pass execution to the subsequent middleware
        return next();
      } catch (err) {
        // Throw an error just in case anything goes wrong with verification
        // throw new Error(err);
        return res.status(403).json({error: "Token match"})
      }

  } else {
      res.status(500).json({ error: "Not Authorized" });
      // throw new Error("Not Authorized");
  }
}

module.exports = isAuthenticated;