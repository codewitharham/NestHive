import User from "../models/User.model.js";
import { ApiResponse } from "../utils/apiResponse.js";
import ApiError from "../utils/apiErrors.js";
import bcrypt from "bcryptjs";
import { asyncHandler } from "../middleware/asyncHandler.js";
import jwt from "jsonwebtoken";



/**
 * @desc Change Password
 * @route POST /api/users/set-password
 */
export const userSetPassword = asyncHandler(async (req, res, next) => {
    const { currentPassword, newPassword } = req.body;

    if (!currentPassword || !newPassword) {
        throw new ApiError(400, "Both current and new passwords are required");
    }

    const user = await User.findById(req.user.id).select("+password");

    if (!user || !(await bcrypt.compare(currentPassword, user.password))) {
        throw new ApiError(401, "Incorrect current password");
    }

    user.password = await bcrypt.hash(newPassword, 10);
    await user.save();

    res.status(200).json(new ApiResponse(200, null, "Password updated successfully"));
});