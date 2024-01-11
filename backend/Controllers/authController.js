import User from "../models/UserSchema.js";
import Artist from "../models/ArtistSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const generateToken = user=> {
    return jwt.sign({id:user._id, role:user.role}, process.env.JWT_SECRET_KEY, {
        expiresIn: "15d",
    })
}

export const register = async (req, res) => {
  const { email, password, name, role, photo, gender } = req.body;

  try {
    let user = null;

    if (role === "customer") {
      user = await User.findOne({ email });
    } else if (role === "artist") {
      user = await Artist.findOne({ email });
    }

    // Checking if user exists
    if (user) {
      return res.status(400).json({ success: false, message: "User already exists" });
    }

    // Check if the password meets the required criteria
    if (!isPasswordValid(password)) {
      return res.status(400).json({
        success: false,
        message:
          "Password must contain at least 8 characters, including uppercase and lowercase letters, symbols, and numbers.",
      });
    }

    // Check if the email is valid
    if (!isEmailValid(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format",
      });
    }

    if (!isNameValid(name)) {
      return res.status(400).json({
        success: false,
        message: "Invalid name format",
      });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    if (role === "customer") {
      user = new User({
        name,
        email,
        password: hashPassword,
        photo,
        gender,
        role,
      });
    }

    // artist
    if (role === "artist") {
      user = new Artist({
        name,
        email,
        password: hashPassword,
        photo,
        gender,
        role,
      });
    }

    // Save user to the database
    await user.save();

    // You can add a response here to indicate successful registration if needed
    res.status(200).json({ success: true, message: "Registration successful" });
  } catch (err) {
    console.error(err); // Log any errors
    res.status(500).json({ success: false, message: "Internal server error, Try again" }); // Handle errors gracefully
  }
};

function isPasswordValid(password) {
  // Check if password length is at least 8 characters
  if (password.length < 8) {
    return false;
  }

  // Check if password contains at least one uppercase letter
  const uppercaseRegex = /[A-Z]/;
  if (!uppercaseRegex.test(password)) {
    return false;
  }

  // Check if password contains at least one lowercase letter
  const lowercaseRegex = /[a-z]/;
  if (!lowercaseRegex.test(password)) {
    return false;
  }

  // Check if password contains at least one symbol
  const symbolRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  if (!symbolRegex.test(password)) {
    return false;
  }

  // Check if password contains at least one number
  const numberRegex = /\d/;
  if (!numberRegex.test(password)) {
    return false;
  }

  return true;
}

function isEmailValid(email) {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailRegex.test(email);
}

function isNameValid(name) {
  const nameRegex = /^[a-zA-Z\s]+$/;
  return nameRegex.test(name);
}


export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = null;

    const customer = await User.findOne({ email });
    const artist = await Artist.findOne({ email });

    if (customer) {
      user = customer;
    }
    if (artist) {
      user = artist;
    }

    // Check if user exists or not
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // Implement the login logic here

    // Compare passwords
    const isPasswordMatch = await bcrypt.compare(req.body.password, user.password);

    if (!isPasswordMatch) {
      return res.status(400).json({ success: false, message: "Invalid password" });
    }

    // Generate and return a JWT token if login is successful
    const token = generateToken(user);


    console.log(user)
    const { password, role, appointments, ...rest} = user._doc;
    res.status(200).json({ success: true, message: "Login successful", token, data:{...rest,role}, role });
  } catch (err) {
    console.error(err); // Log any errors
    res.status(500).json({ success: false, message: "Failed to login" }); // Handle errors gracefully
  }
};



