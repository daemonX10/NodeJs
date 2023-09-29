const fs= require('fs');

// Asynchronous way to read file
//
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


// OPENING THE FILE WITH LOW LEVEL 
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
    fs.read(fd,buf,0,buf.length,7,function(err,bytes){
        if(err){
            console("error in reading",err);
        }
        else{
                console.log("SUCCESS IN READING OF FILE");
                console.log("data",buf.slice(0,bytes).toString());
            }
        });
    
        //   How to close the file
    fs.close(fd,function(err){
        if(err){
            console.log('error',err);
        }
        else{
            console.log("success in closing the the file");
        }
    })
});
    

// // WRITE THE FILE
// fs.writeFile('input.txt',"updated by demon",function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("success in writing the file");
//     }
// })

// APPEND THE FILE 

// fs.appendFile('File SYSTEM/input.txt',"-by Nagato",'utf-8',function(err){
//     if(err){
//         console.log("ERROR in write the file >",err);
//     }else{
//         console.log('SUCCESS IN WRITING THE THE FILE');
//     }
// });


// sync way
// fs.appendFileSync('input.txt','-- By madara Uchiha');


// deleting file

fs.unlink('input.txt',function(err){
    if(err){
        console.log("ERROR in Deleting the file",err);
    }
    else{
        console.log("Successfully Deleted File");
    }
})