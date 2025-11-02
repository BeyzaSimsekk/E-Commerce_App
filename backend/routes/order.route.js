import express from 'express';
import {placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus} from "../controllers/order.controller.js";
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



export default orderRouter;

