import Collection from "../models/Collection.models.js";
import { ApiResponse } from "../utils/apiResponse.js";
import {ApiError} from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";


export const getCollections = asyncHandler(async (req, res, next) => {
    const collections = await Collection.find({ visibility: "public" }).populate("owner", "name email");
    res.status(200).json(new ApiResponse(200, collections, "Public collections retrieved successfully"));
});


/**
 * @desc Get a single collection by ID
 * @route GET /api/collections/:id
 */
export const getCollectionById = asyncHandler(async (req, res, next) => {
    const collection = await Collection.findById(req.params.id).populate("owner", "name email");

    if (!collection) {
        throw new ApiError(404, "Collection not found");
    }

    if (collection.visibility === "private" && collection.owner._id.toString() !== req.user.id) {
        throw new ApiError(403, "Unauthorized access");
    }

    res.status(200).json(new ApiResponse(200, collection, "Collection retrieved successfully"));
});