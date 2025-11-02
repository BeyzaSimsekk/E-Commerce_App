import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from 'stripe';

// global variables
const currency = 'usd'; // currency for payment
const deliveryCharge = 10; 

// gateway initialization
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

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
        const {userId, items, amount, address} = req.body; 
        const {origin} = req.headers;

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: "Stripe",
            payment: false,
            date: Date.now(),
        }

        const newOrder = new orderModel(orderData);
        await newOrder.save();

        const line_items = items.map((item)=>({
            price_data: {
                currency: currency,
                product_data: {
                    name: item.name,
                },
                unit_amount:item.price * 100, // amount in cents
            },
            quantity: item.quantity
        }))

        line_items.push({
            price_data: {
                currency: currency,
                product_data: {
                    name: "Delivery Charges",
                },
                unit_amount: deliveryCharge * 100, // amount in cents
            },
            quantity: 1
        })

        const session = await stripe.checkout.sessions.create({
            success_url: `${origin}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${origin}/verify?success=false&orderId=${newOrder._id}`,
            line_items,
            mode: 'payment',
        })

        res.status(200).json({success:true, session_url:session.url});

    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message: error.message});
    }
}

// Veryfying Stripe Payment
const verifyStripe = async (req,res) => {

    const {orderId, success, userId} = req.body;

    try {
        
        if(success === "true") {
            // update payment status to true
            await orderModel.findByIdAndUpdate(orderId, {payment: true});
            // Clear the user cart
            await userModel.findByIdAndUpdate(userId, {cartData: {}});
            res.status(200).json({success: true, message: "Payment Successful and Order Placed"});
        } else {
            await orderModel.findByIdAndDelete(orderId);
            res.status(400).json({success: false, message: "Payment Failed, Order Cancelled"});
        }

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
        
        const {orderId, status} = req.body;
        await orderModel.findByIdAndUpdate(orderId, {status});
        res.status(200).json({success: true, message: "Order status updated successfully"});

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

export { verifyStripe, placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus} 