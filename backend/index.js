import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
const bodyParser = require('body-parser');
import authRoute from "./Routes/auth.js";
import userRoute from "./Routes/user.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;


const corsOptions = {
  origin: "http://localhost:5175", // Replace with the actual origin of your frontend application
  credentials: true,
};


app.get('/getdata', (req, res) => {
    res.json(sampleData);
  });
  
  
  app.post('/contact', (req, res) => {
    const { name, email, subject, message } = req.body;
  
   
    console.log('Received contact form submission:', { name, email, subject, message });
  
   
    res.json({ success: true });
  });

app.get("/", (req, res) => {
  res.send("API is working");
});


// datebase connection
mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewURLParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB database is connected");
  } catch (err) {
    console.log("MongoDB database is connection failed");
  }
};

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.json());
app.use("/api/v1/auth", authRoute); //domain api/v1/auth/register
app.use("/api/v1/users", userRoute);

// Define a Mongoose schema for your comments
const commentSchema = new mongoose.Schema({
  body: String,
  comments: [commentSchema], // Nested comments
});

const Comment = mongoose.model('Comment', commentSchema);

// API route to add a new comment
app.post('/api/comments', async (req, res) => {
  const { body, comments } = req.body;

  try {
    const newComment = await Comment.create({ body, comments });
    res.json(newComment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.listen(port, () => {
  connectDB();
  console.log("Server is running on port " + port);
});

