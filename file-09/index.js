const fs = require('fs');
const path = require('path');
const dirpath = path.join(__dirname, "files");

// Not possibe to get another drive data 
// const dirpath = path.join("C:\ProgramFiles\Git")
console.log(dirpath);

// for(i=0;i<5;i++) {
//     fs.writeFileSync(dirpath+"/hello"+i+".txt", "The system is text file")
// }

// fs.readdir(dirpath,(err,files)=>{
//     files.forEach((item)=>{
//         console.log(item)
//     })
// })