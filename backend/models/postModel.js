import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  body: String,
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
});
export default mongoose.model("Comment", commentSchema);
