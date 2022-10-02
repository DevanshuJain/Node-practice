// Alternate
const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
// const url = "mongodb+srv://sample-hostname:27017/?poolSize=20&writeConcern=majority";
const database = 'mydb';
const client = new MongoClient(url);

async function getdata()
{
    let result = await client.connect();
    let db = result.db(database);
    let collection = db.collection('user');
    
    let responce = await collection.find({}).toArray();
    console.log(responce);
}

getdata();

// const { MongoClient } = require("mongodb");
// // Replace the uri string with your MongoDB deployment's connection string.
// const uri = "mongodb://localhost:27017";
//   // "mongodb+srv://<user>:<password>@<cluster-url>?retryWrites=true&writeConcern=majority";
// const client = new MongoClient(uri);
// async function run() {
//   try {
//     await client.connect();
//     // database and collection code goes here
//     const db = client.db("mydb");
//     const coll = db.collection("user");
//     // find code goes here
//     const cursor = coll.find({ title: "The favourite" });
//     // iterate code goes here
//     await cursor.forEach(console.log);
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

