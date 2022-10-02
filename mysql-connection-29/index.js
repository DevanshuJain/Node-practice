const express = require("express");
const con = require("./config");
const config = require("./config");
const app = express();

app.get("/",(req,resp)=>{
    resp.send("router done");
    con.query("select * from users", (err, result)=>{
        if(err){
            resp.send(err);
        }else{
            resp.send(result);
        }
    })
})
app.use(express.json())
app.post("/",(req,resp)=>{
    const data = req.body;
    // const data = {name: "bhaskar", mobile: 2345678}
    con.query("insert into users SET ?",data, (err, result,fields)=>{
        if(err) err;
        resp.send(result);
    })
})

app.put("/",(req,resp)=>{
    const data = req.body;
    // const data = {name: "bhaskar", mobile: 2345678}
    con.query("insert into users SET ?",data, (err, result,fields)=>{
        if(err) err;
        resp.send(result);
    })
})

app.listen(5000);