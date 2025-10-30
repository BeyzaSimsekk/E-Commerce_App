// PURPOSE OF THIS MIDDLEWARE : Check if the user is authenticated (Convert to user token to user ID) 
import jwt from 'jsonwebtoken';

const authUser = async (req, res, next) => {

    const authHeader = req.headers.authorization;

        if (!authHeader) {
        return res.status(401).json({ success: false, message: "No token provided" });
        }
        // "Bearer <token>" formatından sadece token'ı al
        const token = authHeader.split(" ")[1];

        if(!token) return res.status(401).json({success: false , message: "Not Authorized Login Again"});

    try {
        const token_decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = token_decoded.id;
        next();

    } catch (error) {
        console.log(error);
        res.json({success: false , message: error.message});
    }



};

export default authUser;