import ErrorResponse from "../utils/errorResponse.js";
import jwt from "jsonwebtoken";
import User from "../models/UserSchema.js";

// Check if the user is authenticated
export const isAuthenticated = async (req, res, next) => {
  const { token } = req.cookies;

  // Make sure the token exists
  if (!token) {
    return next(new ErrorResponse("You must Log In...", 401));
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);
    next();
  } catch (error) {
    return next(new ErrorResponse("You must Log In", 401));
  }
};
