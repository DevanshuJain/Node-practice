const express = require('express');
const app = express();

const reqfilter=(req, resp, next)=>{
    console.log("middleware")
    if(!req.query.age){
        resp.send("plese provide age");
    }
    else if(req.query.age <= 18 ){
        resp.send("this is not for you");
    }
    else{
        next();
    }

}

app.use(reqfilter)
app.get('/',(req,resp)=>{
    resp.send("Welcome to home page");
});

app.get('/users',(req,resp)=>{
    resp.send("Welcome to users page");
});

app.listen(2000);