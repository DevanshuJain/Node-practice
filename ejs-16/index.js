const express = require('express');
const path = require('path')

const app = express();
const publicPath = path.join(__dirname,'public');

app.set('view engine','ejs');

app.get('/profile',(_,resp)=>{
    const user={
        name: "devanshu jain",
        email: "devanshujain@gmail.com",
        cource: ["c","c++", "java"]
    }
    resp.render('profile', {user});
});

app.get('/login',(_,resp)=>{
    resp.render('login');
});

// app.use(express.static(publicPath));

app.listen(2000);