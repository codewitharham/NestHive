import Collection from "../models/Collection.models.js";
import { ApiResponse } from "../utils/apiResponse.js";
import {ApiError} from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";


export const createCollection = asyncHandler(async (req, res, next) => {
    const { name, visibility, items, tags } = req.body;

    if (!name) {
        throw new ApiError(400, "Collection name is required");
    }

    const newCollection = await Collection.create({
        name,
        owner: req.user.id,
        visibility,
        items,
        tags,
    });

    res.status(201).json(new ApiResponse(201, newCollection, "Collection created successfully"));
});
