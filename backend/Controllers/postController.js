import Post from "../models/postModel.js";
// import ErrorResponse from "../utils/errorResponse";
// import { io } from "../app";

// Create post
export const createPost = async (req, res, next) => {
  const { title, content } = req.body;

  try {
    const post = await Post.create({
      title,
      content,
      postedBy: req.user._id,
    });
    res.status(201).json({
      success: true,
      post,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Show posts
export const showPost = async (req, res, next) => {
  try {
    const posts = await Post.find()
      .sort({ createdAt: -1 })
      .populate("postedBy", "name");
    res.status(200).json({
      success: true,
      posts,
    });
  } catch (error) {
    next(error);
  }
};

// Show single post
export const showSinglePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id).populate(
      "comments.postedBy",
      "name"
    );
    res.status(200).json({
      success: true,
      post,
    });
  } catch (error) {
    next(error);
  }
};

// Delete post
export const deletePost = async (req, res, next) => {
  try {
    await Post.findByIdAndRemove(req.params.id);
    res.status(200).json({
      success: true,
      message: "Post deleted",
    });
  } catch (error) {
    next(error);
  }
};

// Update post
export const updatePost = async (req, res, next) => {
  try {
    const { title, content } = req.body;
    const currentPost = await Post.findById(req.params.id);

    // Build the object data
    const data = {
      title: title || currentPost.title,
      content: content || currentPost.content,
    };

    // Modify post image conditionally
    if (req.body.image !== "") {
      // Handle the logic for updating the image
    }

    const updatedPost = await Post.findByIdAndUpdate(req.params.id, data, {
      new: true,
    });

    res.status(200).json({
      success: true,
      post: updatedPost,
    });
  } catch (error) {
    next(error);
  }
};

// Add comment
export const addComment = async (req, res, next) => {
  const { comment } = req.body;
  try {
    const postComment = await Post.findByIdAndUpdate(
      req.params.id,
      {
        $push: { comments: { text: comment, postedBy: req.user._id } },
      },
      { new: true }
    );
    const post = await Post.findById(postComment._id).populate(
      "comments.postedBy",
      "name email"
    );
    res.status(200).json({
      success: true,
      post,
    });
  } catch (error) {
    next(error);
  }
};

// Add like
export const addLike = async (req, res, next) => {
  try {
    const post = await Post.findByIdAndUpdate(
      req.params.id,
      {
        $addToSet: { likes: req.user._id },
      },
      { new: true }
    );
    const posts = await Post.find()
      .sort({ createdAt: -1 })
      .populate("postedBy", "name");
    io.emit("add-like", posts);

    res.status(200).json({
      success: true,
      post,
      posts,
    });
  } catch (error) {
    next(error);
  }
};

// Remove like
export const removeLike = async (req, res, next) => {
  try {
    const post = await Post.findByIdAndUpdate(
      req.params.id,
      {
        $pull: { likes: req.user._id },
      },
      { new: true }
    );

    const posts = await Post.find()
      .sort({ createdAt: -1 })
      .populate("postedBy", "name");
    io.emit("remove-like", posts);

    res.status(200).json({
      success: true,
      post,
    });
  } catch (error) {
    next(error);
  }
};
