import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';    
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';


dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true, 
  }));

mongoose.connect(process.env.MONGO).then(() => {
console.log('Connected to MongoDBf');
}).catch((err) => {
console.log('Error: Could not connect to MongoDB');
});

app.listen(3000, () => {
console.log('server running on port 3000jdkfj');
});

app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)

app.use((err, req, res, next) => {
    const statuscode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statuscode).json({ success: false, statuscode, message });
});

