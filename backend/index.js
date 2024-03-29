import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import authRoute from "./Routes/auth.js";
import userRoute from "./Routes/user.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

const corsOptions = {
  origin: "http://localhost:5175", // Replace with the actual origin of your frontend application
  credentials: true,
};

// Example data, replace it with your actual data
const sampleData = {
  posts: [
    { id: 1, title: "Post 1", content: "This is the content of post 1." },
    { id: 2, title: "Post 2", content: "This is the content of post 2." },
    // Add more posts as needed
  ],
 
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


// database connection
mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB database is connected");
  } catch (err) {
    console.log("MongoDB database connection failed");
  }
};

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);

// Start the server after connecting to the database
connectDB();
app.listen(port, () => {
  console.log("Server is running on port " + port);
});
