const fs = require('fs');

const file='hello.txt'

// fs.readFile(file,(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data.toString());
//     }
// });

// console.log("Now sync way")

// const data=fs.readFileSync(file);
// console.log(data.toString()); // unless data will be in buffer formate

// ( r, r+, rs, rs+, w, wx, w+, wx+,
// a, ax, a+, ax+).

const buf= new Buffer(1024);

fs.open(file, 'r+', (err, fd) => {
    if (err) {
        console.log(err);
    } else {
        console.log("success in opening the file");
        
        fs.readFile(fd,buf)
    }
});