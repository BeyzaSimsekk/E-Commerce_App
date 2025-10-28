import jwt from "jsonwebtoken";

const adminAuth = async (req,res,next) => {
    try {
        
        const token = req.headers.authorization?.split(" ")[1];
        if(!token) return res.status(401).json({success: false , message: "No Token Provided"});

        const token_decoded = jwt.verify(token, process.env.JWT_SECRET);
        if(token_decoded.id !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) return res.status(401).json({success: false , message: "Not Authorized, Token Failed"});

        next();

    } catch (error) {
        console.log(error);
        res.status(401).json({success: false , message: "Not Authorized"});
        
    }
}

export default adminAuth;