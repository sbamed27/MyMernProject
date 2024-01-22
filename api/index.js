import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.mongo).then(
    ()=>{
        console.log("MongoDB is connected thru Aminov");
    }
).catch(
    (error)=>{
        console.log(error);
    }
);

app.listen(3000, ()=>{
    console.log('Server is running in port 3000 ');
})

app.use("/api/user",userRouter);
app.use("/api/auth", authRouter)