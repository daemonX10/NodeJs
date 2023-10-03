const http= require('http');

const PORT=3011;
const hostName="localhost";

const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.end("Welcome to Pw Skills");
});

server.listen(PORT,hostName,()=>{
    console.log(`Server is running at http://${hostName}:${PORT}`);
});

