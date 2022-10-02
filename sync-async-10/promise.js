let a =10;
let b =10;



var waitingdata=new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(30)
    },2000);
})

waitingdata.then((data)=>{
    b=data;
    console.log(a+b);
})

// console.log(a+b);