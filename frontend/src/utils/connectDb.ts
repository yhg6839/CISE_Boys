// utils/connectDb.ts
import mongoose from 'mongoose';
import 'dotenv/config';

const connection = {};

export const connectToDatabase = async () => {
  if (connection.isConnected) {
    return;
  }

  const db = await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  connection.isConnected = db.connections[0].readyState;
};
