const fs= require('fs');

// Asynchronous way to read file

console.log("start reading file");

fs.readFile('input.txt',function(err,data){
    if(err){
        console.log(err);
    }
    else{
        console.log("data is:",data.toString());
    }
})

console.log("other stuff");