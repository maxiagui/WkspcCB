const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const MONGOURI = process.env.MONGODB_URI;

const connectDB = async () => {
  await mongoose.connect(MONGOURI);
  console.log('DB Connected...');
};

module.exports = connectDB;

