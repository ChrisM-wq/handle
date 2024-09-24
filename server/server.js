const mongoose = require('mongoose');
const app = require('./app');

require('dotenv').config();

// Replace this line to point to the local MongoDB instance
const DB = 'mongodb://localhost:27017/myDatabase'; // Replace 'myDatabase' with your database name

mongoose.set('strictQuery', false);
mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('DB connection successful!');
}).catch(err => {
  console.error('DB connection error:', err);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App running on port: ${port}...`);
});