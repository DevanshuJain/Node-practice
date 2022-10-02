const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/products",{useNewUrlparser: true, useUnifiedTopology: true});
const UserSchema = new mongoose.Schema({
    name:String,
    price:Number,
    brand:String
});

const saveInDB = async () => {
    const UserModal = mongoose.model('mobile', UserSchema);
    let data = new UserModal({name:"m8", price:2500, brand:"Nokia", size:"Nokia"});
    let result = await data.save();
    console.log(result);
    mongoose.connection.close();
}

const updateInDB = async () => {
    const User = mongoose.model('mobile', UserSchema);    
    console.log("update this");
    let result = await User.updateMany({name:"m8"}, { $set: {price:800}});
    console.log(result);
}

const deleteInDB = async () => {
    const User = mongoose.model('mobile', UserSchema);    
    console.log("deleting this");
    let result = await User.deleteMany({name:"m8"});
    console.log(result);
}

const findInDB = async () => {
    const User = mongoose.model('mobile', UserSchema);    
    console.log("Finding users");
    let result = await User.find();
    console.log(result);
}

findInDB()
