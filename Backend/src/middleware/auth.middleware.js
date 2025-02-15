import jwt from "jsonwebtoken";
import User from "../models/User.model.js";

export const authenticateUser = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];

        if (!token) {
            return res.status(401).json({ error: "Access denied. No token provided." });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select("-password");

        if (!req.user) {
            return res.status(401).json({ error: "Invalid token." });
        }

        next();
    } catch (error) {
        return res.status(401).json({ error: "Unauthorized request." });
    }
};
