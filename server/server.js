import express from 'express';
import connectDB from './database/connectDB.js';
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'

import authRoutes from './routes/auth.routes.js'
import userRoute from './routes/user.routes.js'
import productRoutes from './routes/product.routes.js'


const app = express();

app.use(express.json());
app.use(cors());
app.use('/images',express.static('server/uploads'))


app.use('/api/v1',authRoutes)
app.use('/api/v1',userRoute)
app.use('/api/v1',productRoutes)


const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    connectDB()
    console.log(`server running on port ${PORT}`);
});