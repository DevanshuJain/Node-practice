const express = require("express");
const dbConnect = require("./mongodb");
const mongodb = require("mongodb");
const app = express();

app.use(express.json());

app.get('/', async (req, resp) => {
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data);
    resp.send(data)
});

app.post('/', async (req, resp) => {
    let data = await dbConnect();
    let result = await data.insertOne(req.body)
    console.log(result);
    resp.send(req.body)
});

app.put('/:id', async (req, resp) => {
    let data = await dbConnect();
    let result = await data.updateOne({name: req.params.id},
        {$set:req.body})
    resp.send({result:"update"});
});

app.delete('/:id', async (req, resp) => {
    let data = await dbConnect();
    let result = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
    resp.send(result);
});

app.listen(5000);