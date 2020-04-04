const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://jobs:j123456@cluster0-8nfia.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}, () => {
  console.log('database is connect');
});