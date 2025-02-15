import Collection from "../models/Collection.models.js";
import { ApiResponse } from "../utils/apiResponse.js";
import {ApiError} from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";



/**
 * @desc Delete a collection
 * @route DELETE /api/collections/:id
 */
export const deleteCollection = asyncHandler(async (req, res, next) => {
    const collection = await Collection.findById(req.params.id);

    if (!collection) {
        throw new ApiError(404, "Collection not found");
    }

    if (collection.owner.toString() !== req.user.id) {
        throw new ApiError(403, "Unauthorized access");
    }

    await collection.deleteOne();
    res.status(200).json(new ApiResponse(200, null, "Collection deleted successfully"));
});
