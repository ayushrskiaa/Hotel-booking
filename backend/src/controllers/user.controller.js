// Importing utility for handling asynchronous functions
import { asyncHandler } from '../utils/asyncHandler.js';
// Importing custom error handling utility
import { ApiError } from '../utils/ApiError.js';
// Importing the User model for database operations
import { User } from '../models/user.model.js';
// Importing utility for uploading files to Cloudinary
import { uploadOnCloudinary } from '../utils/cloudinary.js';
// Importing multer middleware for handling file uploads
import { upload } from '../middlewares/multer.middleware.js';
// Importing utility for creating API responses
import { ApiResponse } from '../utils/ApiResponse.js';


// Function to generate access and refresh tokens for a user
const generateAccessAndRefreshToken = async (userId) => {
    try {
        // Fetching the user from the database
        const user = await User.findById(userId);
        // Generating access and refresh tokens
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        // Saving the refresh token in the database
        user.refreshToken = refreshToken;
        await user.save({ validateBeforeSave: false });

        // Returning the generated tokens
        return { accessToken, refreshToken };
    } catch (error) {
        // Throwing an error if token generation fails
        throw new ApiError(500, "Something went wrong while generating access tokens");
    }
};

// Controller function to register a new user
const registerUser = asyncHandler(async (req, res) => {
   
   
    // Step 1: Extracting user details from the request body
    const { fullName, email, username, password } = req.body;
    console.log("email", email);

   
   
    // Step 2: Validating that all required fields are provided
    if ([fullName, email, username, password].some((field) => field?.trim() === "")) {
        throw new ApiError(400, "All fields are required");
    }
    
    
    // Step 3: Checking if a user with the same username or email already exists
    const existedUser = await User.findOne({
        $or: [{ username }, { email }]
    });

    if (existedUser) {
        throw new ApiError(409, "User already exists");
    }

    
    
    // Step 4: Extracting file paths for avatar and cover image from the request
    const avatarLocalPath = req.files?.avatar[0]?.path;
    const coverImageLocalPath = req.files?.coverImage[0]?.path;

    console.log('Files received:', req.files);

    // Step 5: Uploading avatar and cover image to Cloudinary
    const avatar = await uploadOnCloudinary(avatarLocalPath);
    const coverImage = await uploadOnCloudinary(coverImageLocalPath);


    // Step 6: Creating a new user in the database
    const user = await User.create({
        fullName,
        avatar: avatar?.url || "",
        coverImage: coverImage?.url || "",
        email,
        password,
        username: username.toLowerCase()
    });



    // Step 7: Fetching the created user and excluding sensitive fields
    const createdUser = await User.findById(user._id).select("-password -refreshToken");

    if (!createdUser) {
        throw new ApiError(500, "User not created");
    }



    // Step 8: Returning a success response with the created user
    return res.status(201).json(
        new ApiResponse(200, createdUser, "User registered successfully")
    );
});


// Controller function to log in a user
const loginUser = asyncHandler(async (req, res) => {
    // Extracting login details from the request body
    const { email, username, password } = req.body;


    // Validating that either username or email is provided
    if (!username || !email) {
        throw new ApiError(400, "Username or email is required");
    }




    // Fetching the user from the database
    const user = await User.findOne({
        $or: [{ username }, { email }]
    });

    if (!user) {
        throw new ApiError(404, "User not found");
    }



    // Validating the provided password
    const isPasswordCorrect = await user.isPasswordCorrect(password);

    if (!isPasswordCorrect) {
        throw new ApiError(401, "Invalid user credentials");
    }


    // Generating access and refresh tokens
    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(user._id);


    // Fetching the logged-in user and excluding sensitive fields
    const loggedInUser = await User.findById(user._id).select("-password -refreshToken");




    // Setting cookie options
    const options = {
        httpOnly: true,
        secure: true
    };

    // Returning a success response with the user and tokens
    return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
            new ApiResponse(
                200,
                {
                    user: loggedInUser,
                    accessToken,
                    refreshToken
                },
                "User logged in successfully"
            )
        );
});

// Controller function to log out a user
const logoutUser = asyncHandler(async (req, res) => {
    // Clearing the refresh token from the database
    await User.findByIdAndUpdate(req.user._id, {
        $set: {
            refreshToken: undefined
        }
    }, {
        new: true
    });

    // Setting cookie options
    const options = {
        httpOnly: true,
        secure: true
    };

    // Clearing cookies and returning a success response
    return res
        .status(200)
        .clearCookie("accessToken", options)
        .clearCookie("refreshToken", options)
        .json(new ApiResponse(200, {}, "User logged out successfully"));
});

// Exporting the controller functions
export { registerUser, loginUser, logoutUser };