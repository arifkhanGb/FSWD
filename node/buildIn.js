const fs = require("fs");

//file read kr rahe hai.
 
// fs.readFile("./sample.txt", "utf-8" , (err , data)=>{
//         if(err)
//         {
//             throw err;
//         }
//         console.log(data);
// })

const a ="this file is created by writing writeFile() function";

fs.writeFile("./byWrite.txt", a, ()=>{
    console.log("Writing");
});

console.log("I am first");