const mongoose = require('mongoose');
const connectDB = require('../backend/config/db');

const User = require('../backend/models/userModel');
const Trade = require('../backend/models/tradeModel');

const initMongoDB = async () => {
  try {
    await connectDB(); 
    await User.deleteMany({});
    await Trade.deleteMany({});

    console.log('MongoDB Initialized: Existing data cleared.');

    await User.createIndexes({ email: 1 }, { unique: true });

    console.log('MongoDB: Indexes created.');

    mongoose.connection.close();

    console.log('MongoDB Initialization Complete.');
  } catch (error) {
    console.error('Error initializing MongoDB:', error);
    process.exit(1); 
  }
};

if (require.main === module) {
    initMongoDB();
}
