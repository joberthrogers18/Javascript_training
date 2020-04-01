module.exports = function proctectRoute(req, res, nex) {
  if(req.user) {
    next();
  } else {
    res.status(500).json({ error: 'login is required!'});
  }
}