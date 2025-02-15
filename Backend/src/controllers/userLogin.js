import User from "../models/User.model.js";
import { ApiResponse } from "../utils/apiResponse.js";
import ApiError from "../utils/apiErrors.js";
import bcrypt from "bcryptjs";
import { asyncHandler } from "../middleware/asyncHandler.js";
import jwt from "jsonwebtoken";


/**
 * @desc User Login
 * @route POST /api/users/login
 */
export const userLogin = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        throw new ApiError(400, "Email and password are required");
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user || !(await bcrypt.compare(password, user.password))) {
        throw new ApiError(401, "Invalid email or password");
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

    res.status(200).json(new ApiResponse(200, { user, token }, "Login successful"));
});