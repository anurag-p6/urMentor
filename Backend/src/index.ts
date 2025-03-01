import express,{Express} from 'express';
import { signupRouter } from './routes/signupRoutes';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import { signinRouter } from './routes/signinRoutes';
dotenv.config()

const app: Express = express();
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

app.use('/api', signupRouter);
app.use('/api',signinRouter)


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});