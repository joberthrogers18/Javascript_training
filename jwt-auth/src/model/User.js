const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  first: String,
  email: { type: String, unique: true},
  password: String,
  image: String
}, {timestamps: true});

UserSchema.pre('save', function (next) {
  const user = this;

  if(!user.isModified('password')) {
    return next();
  }

  bcrypt.hash(user.password, 10).then((hashedPass) => {
    user.password = hashedPass;
    next();
  }, function (err) {
    next(err);
  });
});

UserSchema.methods.comparePassword = function(candidatePassword, next) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
    if(err) return next(err);
    next(null, isMatch);
  });
}

module.exports = mongoose.model("User", UserSchema);