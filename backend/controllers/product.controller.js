import {v2 as cloudinary} from 'cloudinary';

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

        console.log("----", name, description, price, category, subCategory, sizes, bestSeller);
        console.log(imagesURL);

        res.status(201).json({}); //message: "Product added successfully" 

    } catch (error) {
        console.error("Error adding product:", error);
        res.status(500).json({success: false, message: "Error adding product", error: error.message });
    }
};

// Controller to list products
const listProducts = async (req, res) => {
    try {
        
    } catch (error) {
        
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