import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
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
app.use("/api/v1/auth", authRoute); //domain api/v1/auth/register
app.use("/api/v1/users", userRoute);

app.listen(port, () => {
  connectDB();
  console.log("Server is running on port " + port);
});
