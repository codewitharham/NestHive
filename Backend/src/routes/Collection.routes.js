import { Router } from "express";
import { createCollection } from "../controllers/createCollection";
import { getCollections, getCollectionById } from "../controllers/getCollection";
import { deleteCollection } from "../controllers/deleteCollection";
import { updateCollection } from "../controllers/updateCollection";

const CollectionRouter = Router();

// Define API endpoints
CollectionRouter.route("/")
  .post(createCollection)   // Create a new collection
  .get(getCollections);     // Get all collections

CollectionRouter.route("/:id")
  .get(getCollectionById)   // Get a single collection by ID
  .put(updateCollection)    // Update an existing collection
  .delete(deleteCollection); // Delete a collection

export { CollectionRouter };
