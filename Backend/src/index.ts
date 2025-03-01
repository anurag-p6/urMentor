import express from 'express';
import { userRouter } from './routes/userRoutes';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()

const app = express();
app.use(express.json());

const mongooseconnection = async (): Promise<void> => {
  try { 
    await mongoose.connect(process.env.MONGO_URL as string, {     
    });
    console.log('Database connected successfully');
  } catch (error:any) {
    console.log('Error:', error.message);
  }
};

mongooseconnection();

app.use('/api', userRouter);


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});