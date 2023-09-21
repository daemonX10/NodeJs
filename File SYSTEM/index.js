const fs= require('fs');

// Asynchronous way to read file

// console.log("start reading file");

// fs.readFile('input.txt',function(err,data){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("data is:",data.toString());
//     }
// })

// console.log("other stuff");

// console.log("start writing file");
// const data=fs.readFileSync('input.txt');
// console.log("data is:",data.toString());
// console.log("other stuff");

/* The line `const buf=new Buffer (1024);` is creating a new buffer object with a size of 1024 bytes.
Buffers are used to store binary data in Node.js. In this case, it is creating a buffer to read data
from a file. */
const buf=new Buffer (1024);

fs.open('input.txt','r+',function(err,fd){
    if(err){
        console.log("ERROR IN READING OPENING THE FILE", err);
    }
    else{
        console.log("success in opeing the file");
    }

    /* The `fs.read()` function is used to read data from a file asynchronously. */
    fs.read(fd,buf,0,buf.length,0,function(err,bytes){
        if(err){
            console("error in reading",err);
        }
        else{
            console.log("SUCCESS IN READING OF FILE");
            console.log("data",buf.slice(0,bytes).toString());
        }
    })

})