const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/products",{useNewUrlparser: true, useUnifiedTopology: true})
.then( ()=> console.log("connection sucessfully"))
.catch((err)=>console.log(err));

const UserSchema = new mongoose.Schema({
    name:String
});

const MobileModal = mongoose.model('mobile', UserSchema);
let data = new MobileModal({name:"m9"});
let result = data.save();
console.log(result);

// alternative
// const mongoose = require('mongoose');
// const main = async () => {
//     await mongoose.connect("mongodb://localhost:27017/mydb",{useNewUrlparser: true, useUnifiedTopology: true});
//     const UserSchema = new mongoose.Schema({
//         name:String
//     });
//     const UserModal = mongoose.model('user', UserSchema);
//     let data = new UserModal({name:"m8"});
//     let result = await data.save();
//     console.log(result);
//     mongoose.connection.close();
// }

// main()
