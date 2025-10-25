import userModel from '../models/userModel.js';
import validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET)
};

// Controller for user login
const loginUser = async (req, res) => {
    try {
        
        const {email, password} = req.body;

        // Check if the user exists
        const user = await userModel.findOne({email});
        if(!user){
            return  res.status(400).json({success: false , message: "User does not exist"});
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(isMatch){
            // Token generation for authentication
            const token = createToken(user._id);
            res.status(200).json({success: true , message: "User logged in successfully", data: {user, token}});
        } else {
            res.status(400).json({success: false , message: "Invalid credentials"});
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({success: false , message: "User login failed", error: error.message});
    }
};


// Controller for user registration
const registerUser = async (req, res) => {
    try {
        
        const { name, email, password } = req.body;

        // Check if the user already exists
        const existingUser = await userModel.findOne({email});
        if(existingUser){
            return res.status(400).json({success: false , message: "User already exists"});
        }
        
        // Check the validity of the strong password and email
        if(!validator.isEmail(email)){
            return res.status(400).json({success: false , message: "Please enter a valid email"});
        }
        if(password.length < 8){
            return res.status(400).json({success: false , message: "Please enter a strong password with minimum 8 characters"});
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10); // the larger the number, the more time it takes to hash
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        })

        const user = await newUser.save();

        // Token generation for authentication
        const token = createToken(user._id);
        res.status(201).json({success: true , message: "User registered successfully", data: {user, token}});

    } catch (error) {
        console.log(error);
        res.status(500).json({success: false , message: "User registration failed", error: error.message});
    }
};


// Controller for admin login
const adminLogin = async (req, res) => {};

export { loginUser, registerUser, adminLogin };