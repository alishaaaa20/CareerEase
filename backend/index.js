import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./Routes/auth.js";
import userRoute from "./Routes/user.js";
import artistRoute from "./Routes/artist.js";
import http from "http";
import { Server } from "socket.io";
import postRoute from "./Routes/postRoute.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

const corsOptions = {
  origin: "http://localhost:5174",
  credentials: true,
};

const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
  res.send("API is working");
});

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

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/artists", artistRoute);
app.use("/api/v1/posts", postRoute);

app.post("/api/comments", async (req, res) => {
  try {
    const newComment = await Comment.create(req.body);
    res.json(newComment);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

io.on("connection", (socket) => {
  socket.on("comment", (msg) => {
    io.emit("new-comment", msg);
  });
});

server.listen(port, () => {
  connectDB();
  console.log("Server is running on port " + port);
});
