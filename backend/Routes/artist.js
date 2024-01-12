import express from "express";
import {
  updateArtist,
  deleteArtist,
  getSingleArtist,
  getAllArtist,
  getArtistBySearch,
} from "../Controllers/artistController.js";
import { authenticate, restrict } from "../auth/verifyToken.js";

const router = express.Router();

router.get("/:id", getSingleArtist);
router.get("/", getAllArtist);
router.put("/:id", authenticate, restrict(["artist"]), updateArtist);
router.get("/:id", authenticate, restrict(["artist"]), deleteArtist);

export default router;
