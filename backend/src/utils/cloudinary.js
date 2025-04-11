
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs/promises';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) {
      console.error('No file path provided for upload');
      return null;
    }

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    console.log("File uploaded successfully to Cloudinary:", response.secure_url);
    
    // Delete the file from the local storage after successful upload
    await fs.unlink(localFilePath);
    console.log("Local file deleted successfully:", localFilePath);

    return response;
  } catch (error) {
    console.error("Cloudinary upload failed:", error.message);
    
    // Ensure file cleanup on error
    try {
      await fs.unlink(localFilePath);
      console.log("Local file deleted due to failed upload:", localFilePath);
    } catch (unlinkError) {
      console.error("Failed to delete local file:", unlinkError.message);
    }

    return null;
  }
};

export { uploadOnCloudinary };
