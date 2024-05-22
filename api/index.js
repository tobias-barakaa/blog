import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';    

dotenv.config();
const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO).then(() => {
console.log('Connected to MongoDBf');
}).catch((err) => {
console.log('Error: Could not connect to MongoDB');
});

app.listen(3000, () => {
console.log('server running on port 3000jdkfj');
});

app.get('/test', (req, res) => {
    res.json({ message: "api is good" })

});
