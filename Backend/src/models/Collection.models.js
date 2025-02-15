import mongoose from "mongoose";

const collectionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Collection name is required"],
        trim: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // Reference to User model
        required: true
    },
    visibility: {
        type: String,
        enum: ["public", "private"],
        default: "public"
    },
    items: [
        {
            name: { type: String, required: true },
            url: { type: String, required: true }
        }
    ],
    tags: [{ type: String }], // Tags for search & categorization
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Collection = mongoose.models.Collection || mongoose.model("Collection", collectionSchema);

export default Collection;
