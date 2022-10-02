const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/products")

// mongoose.connect("mongodb://localhost:27017/products",{useNewUrlparser: true, useUnifiedTopology: true});