import jwt from "jsonwebtoken";
import Artist from "../models/ArtistSchema.js";
import User from "../models/UserSchema.js";

export const authenticate = async (req, res, next) => {
    // Get token from headers
    const authToken = req.headers.authorization;

    // Check if token exists
    if (!authToken || !authToken.startsWith('Bearer')) {
        return res.status(401).json({ success: false, message: "No token, authorization denied" });
    }

    try {
        const token = authToken.split(" ")[1];

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        req.userId = decoded.id;
        req.role = decoded.role;

        next(); // Must call the next function
    } catch (err) {
        if (err.name === "TokenExpiredError") {
            return res.status(401).json({ success: false, message: "Token is expired" });
        }
        return res.status(401).json({ success: false, message: "Invalid Token" });
    }
};

export const restrict = roles => async (req, res, next) => {
    const userId = req.userId;
    let user;

    const customer = await User.findById(userId);
    const artist = await Artist.findById(userId);

    if (customer) {
        user = customer;
    }
    if (artist) {
        user = artist;
    }

    if (!roles.includes(user.role)) {
        return res.status(401).json({ success: false, message: "You're not authorized" });
    }

    next();
};
