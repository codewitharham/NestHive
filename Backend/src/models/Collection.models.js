import { Router } from "express";
import { createCollection } from "../controllers/createCollection.js";
import { getCollections, getCollectionById } from "../controllers/getCollection.js";
import { deleteCollection } from "../controllers/deleteCollection.js";
import { updateCollection } from "../controllers/updateCollection.js";
import { authenticateUser } from "../middleware/auth.middleware.js";

const CollectionRouter = Router();

// Define API endpoints
CollectionRouter.route("/")
  .post(authenticateUser, createCollection)   // Create a new collection (protected)
  .get(getCollections);                       // Get all public collections

CollectionRouter.route("/:id")
  .get(authenticateUser, getCollectionById)   // Get a single collection (protected for private ones)
  .put(authenticateUser, updateCollection)    // Update an existing collection (only owner)
  .delete(authenticateUser, deleteCollection); // Delete a collection (only owner)

export { CollectionRouter };
