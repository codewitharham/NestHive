import Collection from "../models/Collection.models.js";
import { ApiResponse } from "../utils/apiResponse.js";
import {ApiError} from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";


export const updateCollection = asyncHandler(async (req, res, next) => {
    const collection = await Collection.findById(req.params.id);

    if (!collection) {
        throw new ApiError(404, "Collection not found");
    }

    if (collection.owner.toString() !== req.user.id) {
        throw new ApiError(403, "Unauthorized access");
    }

    const updatedCollection = await Collection.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.status(200).json(new ApiResponse(200, updatedCollection, "Collection updated successfully"));
});
