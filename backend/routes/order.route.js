import express from 'express';
import { verifyStripe, placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus, verifyRazorpay} from "../controllers/order.controller.js";
import adminAuth from '../middleware/adminAuth.js';
import authUser from '../middleware/auth.js';

const orderRouter = express.Router();

// User Feature
orderRouter.post("/userorders", authUser, userOrders);

// Payment Features
orderRouter.post("/place", authUser, placeOrder);
orderRouter.post("/stripe", authUser, placeOrderStripe);
orderRouter.post("/razorpay", authUser, placeOrderRazorpay);

// Admin Features
orderRouter.post("/list",adminAuth, allOrders);
orderRouter.post("/status",adminAuth, updateStatus);

// Verify Payment
orderRouter.post('/verifyStripe', authUser, verifyStripe);
orderRouter.post('/verifyRazorpay', authUser, verifyRazorpay);

export default orderRouter;

