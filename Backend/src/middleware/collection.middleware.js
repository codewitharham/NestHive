import Collection from "@/models/collection.model.js";

export const verifyCollectionOwner = async (req, res, next) => {
    try {
        const { id } = req.params;
        const collection = await Collection.findById(id);

        if (!collection) {
            return res.status(404).json({ error: "Collection not found." });
        }

        if (collection.visibility === "private" && collection.owner.toString() !== req.user.id) {
            return res.status(403).json({ error: "Unauthorized. You do not own this collection." });
        }

        req.collection = collection;
        next();
    } catch (error) {
        return res.status(500).json({ error: "Internal server error." });
    }
};
