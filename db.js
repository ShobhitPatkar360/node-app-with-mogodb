const mongoose = require('mongoose');
const CONN = process.env.CONN;

mongoose.connect(CONN, { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database connected successfully');
});
