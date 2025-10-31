import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/user.route.js';
import productRouter from './routes/product.route.js';
import cartRouter from './routes/cart.route.js';
import orderRouter from './routes/order.route.js';

// App Config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// Middlewares
app.use(express.json()); // to parse JSON bodies
app.use(cors()); // to enable CORS

// API Endpoints
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);

app.get('/', (req,res)=>{
    res.send("API Working");
})

app.listen(port, () => console.log(`Server is running on port ${port}`));
