const express = require('express');
const app = express();

app.get('',(req, resp)=>{
    resp.send("<h1>Hello, this is home page</h1>");
});

app.get('/about',(req, resp)=>{
    resp.send(`
    <input type="text" placeholder="user Name" />
    <Button>click me</Button>
    `);
});

app.get('/help',(req, resp)=>{
    resp.send([{
        email: "devanshujain@gmail.com",
        name: "devanshu jain"
    }]);
});

app.listen(3000);


// console.log("test");