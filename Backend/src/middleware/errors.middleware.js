import {ApiError} from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";

const errorHandler = (err, req, res, next) => {
    console.error(err); // Log error for debugging

    if (err instanceof ApiError) {
        return res.status(err.statusCode).json({
            success: false,
            message: err.message,
            errors: err.errors,
        });
    }

    res.status(500).json(new ApiResponse(500, null, "Internal Server Error"));
};

export default errorHandler;
