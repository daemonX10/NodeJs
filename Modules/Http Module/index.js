const http= require('http');

http.createServer((req,res)=>{
    if(req.url=='/'){
        res.write("<h1>Hello everyone</h1>");
    }
    res.end();
});

server.listen(5005);

console.log("HTTP  server is running on port 5005");