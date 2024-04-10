import express from 'express';
import connectDB from './database/connectDB.js';
import dotenv from 'dotenv'
dotenv.config()



const app = express();

app.use(express.json());


const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    connectDB()
    console.log(`server running on port ${PORT}`);
});