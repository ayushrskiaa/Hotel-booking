// Importing custom error handling utility
import { ApiError } from "../utils/ApiError.js";
// Importing utility to handle asynchronous functions
import { asyncHandler } from "../utils/asyncHandler.js";
// Importing JSON Web Token library for token verification
import jwt from "jsonwebtoken";
// Importing the User model to fetch user details from the database
import { User } from "../models/user.model.js";

// Middleware to verify JSON Web Token (JWT)
export const verifyJWT = asyncHandler(async (req, res, next) => {
  try {
    // Extracting the token from cookies or Authorization header
    const token =
      req.cookies?.accessToken ||
      request.header("Authorization")?.replace("Bearer ", "");

    // If no token is found, throw an unauthorized error
    if (!token) {
      throw new ApiError(401, "Unauthorized");
    }

    // Verifying the token using the secret key
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    // Fetching the user from the database using the decoded token's user ID
    const user = await User.findById(decodedToken?._id).select(
      "-password -refreshToken" // Excluding sensitive fields like password and refreshToken
    );

    // If no user is found, throw an invalid token error
    if (!user) {
      throw new ApiError(401, "Invalid Access Token");
    }

    // Attaching the user object to the request for further use
    req.user = user;

    // Proceeding to the next middleware or route handler
    next();
  } 
  catch (error) {
    // Throwing an error with a custom message if token verification fails
    throw new ApiError(401, error?.message || "Invalid Access Token");
  }
});
