import {v2 as cloudinary} from 'cloudinary';
import productModel from '../models/productModel.js';

// Controller to add a new product
const addProduct = async (req, res) => {
    try {
        
        const { name, description, price, category, subCategory, sizes, bestSeller} = req.body;

        const image1 = req.files.image1 && req.files.image1[0]
        const image2 = req.files.image2 && req.files.image2[0]
        const image3 = req.files.image3 && req.files.image3[0]
        const image4 = req.files.image4 && req.files.image4[0]

        const images = [image1, image2, image3, image4].filter((item) => item !== undefined);
        let imagesURL = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path, {resource_type: "image"});
                return result.secure_url
            })
        )

        // console.log("----", name, description, price, category, subCategory, sizes, bestSeller);
        // console.log(imagesURL);

        const productData = {
            name,
            description,
            price: Number(price),
            category,
            subCategory,
            bestSeller: bestSeller === "true" ? true : false,
            sizes: JSON.parse(sizes), // we cannot send array directly in form data so we send as string and parse it here
            image: imagesURL,
            date: Date.now()
        }

        console.log(productData);

        const product = new productModel(productData);
        await product.save();

        res.status(201).json({success: true, message: "Product added successfully", data: product});

    } catch (error) {
        console.error("Error adding product:", error);
        res.status(500).json({success: false, message: "Error adding product", error: error.message });
    }
};

// Controller to list products
const listProducts = async (req, res) => {
    try {
        
        const products = await productModel.find({});
        res.status(200).json({success: true, message: "Products fetched successfully", data: products});

    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({success: false, message: "Error fetching products", error: error.message });      
    }
};

// Controller to remove a product
const removeProduct = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
};

// Controller to get a single product info
const singleProduct = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
};

export { addProduct, listProducts, removeProduct, singleProduct };