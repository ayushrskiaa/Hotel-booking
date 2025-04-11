// Importing mongoose for MongoDB connection
import mongoose from "mongoose";
// Importing the database name constant
import { DB_NAME } from "../constants.js";

// Function to establish a connection to the MongoDB database
const connectDB = async () => {
    try {
        // Attempting to connect to MongoDB using the URI from environment variables and the database name
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_DB_URI}/${DB_NAME}`);
        
        
        // Logging a success message with the host information
        console.log(`\n Connected to MongoDB!!  DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        
        // Logging the error message if the connection fails
        console.log("Error: ", error);
        
        // Exiting the process with a failure code
        process.exit(1);
    }
};

// Exporting the connectDB function for use in other parts of the application
export default connectDB;