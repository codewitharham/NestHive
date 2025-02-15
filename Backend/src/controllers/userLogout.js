
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../middleware/asyncHandler.js";


/**
 * @desc Logout User (Client should remove token)
 * @route POST /api/users/logout
 */
export const userLogout = asyncHandler(async (req, res, next) => {
    res.status(200).json(new ApiResponse(200, null, "Logout successful"));
});