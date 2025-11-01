import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// -------------------- PAYMENT FEATURES ---------------------

// Placing orders using COD Method (Cash on Delivery)
const placeOrder = async (req,res) => {
    try {
        
        const {userId, items, amount, address} = req.body; // userId from the auth middleware
        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: "COD",
            payment: false,
            date: Date.now(),
        }

        const newOrder = new orderModel(orderData);
        await newOrder.save(); // save the order data in the database

        // Clear the user cart
        await userModel.findByIdAndUpdate(userId, {cartData: {}});

        res.status(200).json({success: true, message: "Order placed successfully"});


    } catch (error) {
        console.error(error);
        res.status(500).json({success: false, message: error.message});
    }
}

// Placing orders using Stripe Method
const placeOrderStripe = async (req,res) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message: error.message});
    }
}

// Placing orders using Razorpay Method
const placeOrderRazorpay = async (req,res) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message: error.message});
    }
}

// -------------------- ADMIN FEATURES ---------------------

// All Orders data for Admin Panel
const allOrders = async (req,res) => {
    try {
        
        // all orders from all users
        const orders = await orderModel.find({});
        res.status(200).json({success: true, orders});

    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message: error.message});
    }
}

// Update Order Status from Admin Panel
const updateStatus = async (req,res) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message: error.message});
    }
}

// -------------------- USER FEATURE ---------------------

// User Orders data for Frontend
const userOrders = async (req,res) => {
    try {
        
        const {userId} = req.body;
        const orders = await orderModel.find({userId});
        res.status(200).json({success: true, orders});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message: error.message});
    }
}

export {placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus} 