import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

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