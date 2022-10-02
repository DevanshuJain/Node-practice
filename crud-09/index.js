const fs= require('fs');
const path= require('path');
const dirpath = path.join(__dirname,'crud');
console.log(dirpath);
const filepath = `${dirpath}apple.txt`;
console.log(filepath);

console.log(`${dirpath}fruite.txt`);

// fs.writeFileSync(filepath,'This is a simple text file');
// fs.readFile(filepath,'utf8',(err,item)=>{
//     console.log(item);
// })

// fs.appendFile(filepath,'and file name is apple',(err)=>{
//     if(!err) console.log("Something is incorrect")
// })

// fs.rename(filepath, `${dirpath}fruite.txt`,(err)=>{
//     if(!err) console.log("file Name is update")
// })

fs.unlinkSync(`${dirpath}fruite.txt`)