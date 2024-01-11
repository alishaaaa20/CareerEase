import express from "express";
import { getAllReviews, createReview } from "../Controllers/reviewController.js";
import { authenticate, restrict } from "../auth/verifyToken.js"; // Corrected the path to the verifyToken module

const router = express.Router({ mergeParams: true });

router
  .route("/")
  .get(getAllReviews)
  .post(authenticate, restrict(["customer"]), createReview);

export default router;
