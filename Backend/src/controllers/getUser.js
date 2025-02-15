import User from "../models/User.model.js";
import { ApiResponse } from "../utils/apiResponse.js";
import ApiError from "../utils/apiErrors.js";
import bcrypt from "bcryptjs";
import { asyncHandler } from "../middleware/asyncHandler.js";

/**
 * @desc Get Logged-in User
 * @route GET /api/users/me
 */
export const getUser = asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.user.id).select("-password");

    if (!user) {
        throw new ApiError(404, "User not found");
    }

    res.status(200).json(new ApiResponse(200, user, "User retrieved successfully"));
});