const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// database connection


// api creation

app.get("/", (req, res) => {
  res.send("Express app is running");
});

// this is image storage engine
const storage = multer.diskStorage({
  destination: "/upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

// creating upload
app.use("/images", express.static("upload/images"));

app.post("/upload", upload.single("product"), (req, res) => {
  console.log(port)
  console.log(res)
  console.log(req)
  console.log(req.file.filename)
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  });
}); 

//schema for creating products

 
app.listen(port, (error) => {
  if (!error) {
    console.log("server running on port " + port);
  } else {
    console.log("Error: " + error);
  }
});
