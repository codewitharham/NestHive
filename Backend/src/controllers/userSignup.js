import User from "../models/User.model.js";
import { ApiResponse } from "../utils/apiResponse.js";
import {ApiError} from "../utils/apiError.js";
import bcrypt from "bcryptjs";
import { asyncHandler } from "../utils/asyncHandler.js";

/**
 * @desc User Signup
 * @route POST /api/users/signup
 */
export const userSignup = asyncHandler(async (req, res, next) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        throw new ApiError(400, "All fields are required");
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
        throw new ApiError(400, "Email is already in use");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
        name,
        email,
        password: hashedPassword,
    });

    res.status(201).json(new ApiResponse(201, newUser, "User registered successfully"));
});
