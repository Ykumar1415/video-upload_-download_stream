const express = require("express");
const fs = require("fs");
const path = require("path");
const range = require("range-parser");
const fileUpload = require("express-fileupload");
const multer = require("multer");
const app = express();
const port = 3000;

const videoFolder = path.join(__dirname, "videos");

// Middleware to handle file uploading
app.use(fileUpload());

//getting  Route for handling video file uploads
app.use("/upload", require("./routes/upload"));
// getting Route for streaming videos
app.use("/stream", require("./routes/stream"));

// getting Route for downloading videos
app.use("/download", require("./routes/download"));

// Start server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
