import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectString = process.env.CONNECTION;
mongoose
  .connect(connectString)
  .then(() => console.log('Connected to the DB...'))
  .catch((err) => console.log(err));