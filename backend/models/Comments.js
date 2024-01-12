// models/Comment.js
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://careerease2024:careerease2024@cluster0.28n1j0i.mongodb.net/")

const commentSchema = new mongoose.Schema({
  body: { type: String },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
});

const Comment = mongoose.model('Comment', commentSchema);

export default mongoose.model("Comment", commentSchema);
