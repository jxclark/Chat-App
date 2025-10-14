import mongoose from 'mongoose';
import { ENV } from './env.js';

export const connectDB = async () => {
  try {
    const { MONGO_URI } = ENV;
    if (!MONGO_URI) {
      throw new Error('MONGO_URI is not defined');
    }

    const conn = await mongoose.connect(ENV.MONGO_URI);
    console.log('MONGO_URI:', ENV.MONGO_URI ? 'Loaded' : 'Not found');

    console.log('Connected to MongoDB');
  } catch (error) {
    console.log('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};
