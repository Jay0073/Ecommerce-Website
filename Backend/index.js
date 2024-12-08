const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { type } = require("os");

app.use(express.json());
app.use(cors());

// database connection
mongoose.connect(
  "mongodb+srv://Jay:jay8765@myclusters.srqka.mongodb.net/e-commerce"
);

// api creation

app.get("/", (req, res) => {
  res.send("Express app is running");
});

// this is image storage engine
const storage = multer.diskStorage({
  destination: "./upload/images",
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
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  });
});


//schema for creating products
const Product = mongoose.model("Product", {
  id: {
    type: Number,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  new_price: {
    type: Number,
    required: true,
  },
  old_price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  available: {
    type: Boolean,
    default: true,
  },
});

app.post("/addproduct", async (req, res) => {
  const productCount = await Product.countDocuments();

  const product = new Product({
    id: productCount + 1,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    new_price: req.body.new_price,
    old_price: req.body.old_price,
  });
  console.log(product);
  await product.save();
  console.log("product saved");
  res.json({
    success: true,
    name: req.body.name,
  });
});

// creating api for deleting products
app.post('/removeproduct', async (req, res) => {
  await Product.findOneAndDelete({id: req.body.id});
  console.log(`${req.body.id} number product is removed`)
  res.json({
    success: true,
    name: req.body.name
  })
})

// creating api for getting all products
app.get('/allproducts', async (req, res) => {
  let products = await Product.find({});
  console.log("all Products fetched");
  res.send(products);
})


app.listen(port, (error) => {
  if (!error) {
    console.log("server running on port " + port);
  } else {
    console.log("Error: " + error);
  }
});
