var a= 10;
var b= 20;
const c= 10;
console.log(a+b)

if (a == c){
    console.log("match");
}

for (let index = 0; index < a; index++) {
    // const element = array[index];
    console.log(index);
}

const z = [1,2,3,3,4,4,4,4];
console.log(z[0]);

console.log("filter uses");
z.filter((item)=>{
    console.log(item)
})