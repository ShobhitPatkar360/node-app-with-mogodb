const mongoose = require('mongoose');

mongoose.connect('mongodb://13.201.71.69:27017', { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database connected successfully');
});
