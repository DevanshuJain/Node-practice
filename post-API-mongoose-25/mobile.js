const mongoose = require("mongoose");

const mobileschema = new mongoose.Schema({
    name:String,
    price:Number,
    brand:String
});

module.exports = mongoose.model('mobiles', mobileschema);