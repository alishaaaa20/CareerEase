import express from "express";
import {
  createPost,
  showPost,
  showSinglePost,
  deletePost,
  updatePost,
  addComment,
  addLike,
  removeLike,
} from "../Controllers/postController.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

// Blog routes
router.post("/post/create", isAuthenticated, createPost);
router.get("/posts/show", showPost);
router.get("/post/:id", showSinglePost);
router.delete("/delete/post/:id", isAuthenticated, deletePost);
router.put("/update/post/:id", isAuthenticated, updatePost);
router.put("/comment/post/:id", isAuthenticated, addComment);
router.put("/addlike/post/:id", isAuthenticated, addLike);
router.put("/removelike/post/:id", isAuthenticated, removeLike);

export default router;
