// Importing multer for handling file uploads
import multer from 'multer';
// Importing path module for working with file and directory paths
import path from 'path';
// Importing fs module for file system operations
import fs from 'fs';

///

// Defining the temporary directory path for storing uploaded files
const tempDirectory = path.join(process.cwd(), 'public', 'temp');

// Checking if the temporary directory exists, and creating it if it doesn't
if (!fs.existsSync(tempDirectory)) {
  fs.mkdirSync(tempDirectory, { recursive: true });
  console.log('Temp directory created at:', tempDirectory);
}

///

// Configuring multer's disk storage engine
const storage = multer.diskStorage({
    // Setting the destination directory for uploaded files
    destination: function (req, file, cb) {
      cb(null, tempDirectory);
    },
    // Setting the filename for uploaded files to avoid overwriting
    filename: function (req, file, cb) {
      // Generating a unique suffix using the current timestamp and a random number
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      // Extracting the file extension from the original filename
      const ext = path.extname(file.originalname);
      // Creating a unique filename using the field name, unique suffix, and file extension
      cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`); // Avoid file overwriting
    }
});

// Creating a multer instance with the configured storage engine
export const upload = multer({
    storage
});

///

// Exporting the multer middleware for handling multiple file uploads
export default upload.fields([
  { name: 'avatar', maxCount: 1 }, // Field for uploading a single avatar file
  { name: 'coverImage', maxCount: 1 } // Field for uploading a single cover image file
]);


