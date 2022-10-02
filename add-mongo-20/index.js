const dbConnect = require("./mongodb")

const main = async ()=> {
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data);
}
main();

// Alternate
// dbConnect().then((resp) => {
//     resp.find().toArray().then((data) => {
//         console.log(data)
//     })
// });