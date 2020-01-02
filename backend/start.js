require('./models/registration');
require('./models/data');
require('dotenv').config();
const mongoose = require('mongoose');
const PORT=3001;
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });
mongoose.Promise = require('bluebird');

mongoose.connection
  .on('connected', () => {
    console.log(`Mongoose connection open on ${process.env.DATABASE}`);
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
});

const app = require('./app');
const server = app.listen(PORT, () => {
  console.log(`Express is running on port ${server.address().port}`);
});
