const express = require("express");
require("./config");
const Mobile = require("./mobile");

const app = express();
app.use(express.json())

app.post("/create", async (req,resp)=>{
    let data = new Mobile(req.body)
    let result = await data.save();
    console.log(result);
    resp.send("done")
});

app.get("/list", async (req,resp)=>{
    let result = await Mobile.find();
    console.log(result);
    resp.send(result)
});

app.delete("/delete/:_id", async (req,resp)=>{
    console.log(req.params);
    let result = await Mobile.deleteOne(req.params);
    resp.send(result)
});

app.put("/update/:_id", async (req,resp)=>{
    console.log(req.params);
    let result = await Mobile.updateOne(req.params,{$set: req.body});
    resp.send(result)
});

app.put("/search/:key", async (req,resp)=>{
    console.log(req.params.key);
    let result = await Mobile.find({"$or":[
        {"name":{$regex:req.params.key} },
        {"brand":{$regex:req.params.key}}
    ]});
    resp.send(result)
});

app.listen(5000);