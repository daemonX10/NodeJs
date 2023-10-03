const { link } = require('fs');
const http= require('http');

const server=http.createServer((req,res)=>{
    if(req.url=='/'){
        res.write("<h1>hello world</h1>");
    }
    else if(req.url=='/about'){
        res.write("<h1>there is nothing , totally fuced up");
    }
    res.end();
});


server.listen(5005);

console.log("HTTP  server is running on port 5005");