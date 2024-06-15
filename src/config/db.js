import mongoose from 'mongoose';
import {URL, PORT, DB_DATABASE, DB_PORT, DB_HOST} from './config.js'

//const conexionLocal = 'mongodb://'+DB_HOST+':'+DB_PORT+'/'+DB_DATABASE;

const connectDB = async () => {
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
