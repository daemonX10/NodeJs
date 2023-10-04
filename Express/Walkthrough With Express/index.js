const http= require('http');

const PORT=3011;
const hostName="localhost";

const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader("Content-Type","application/json")
    res.end(JSON.stringify({"message":"Hello world"}));
});

server.listen(PORT,hostName,()=>{
    console.log(`Server is running at http://${hostName}:${PORT}`);
});

