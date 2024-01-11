import express from "express";

import { authenticate } from "../auth/verifyToken.js";
import { createBooking, getAllBooking, getBooking } from "../Controllers/bookingController.js";

const router = express.Router();

router.post("/", authenticate, createBooking);
router.get("/:id", authenticate, getBooking);
router.get("/", authenticate, getAllBooking);

export default router;