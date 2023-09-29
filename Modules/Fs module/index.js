const fs = require('fs');

const file='hello.txt'

fs.readFile(file,(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data.toString());
    }
});

console.log("Now sync way")

const data=fs.readFileSync(file);
console.log(data.toString()); // unless data will be in buffer formate