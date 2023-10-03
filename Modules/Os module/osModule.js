const os=require('os');
const { config } = require('process');

// console.log("CPU architecture: "+ os.arch());
// console.log("free memory:"+ os.freemem());
// console.log("total Memory:"+ os.totalmem());
// console.log("Network Interfaces:"+ JSON.stringify(os.networkInterfaces()));console.log("Temp Directory:"+ os.tmpdir());

console.log("OS Type:"+ os.type());
console.log("Os hostname:"+ os.hostname());
console.log("OS platform:"+ os.platform());
console.log("OS release:"+ os.release());
console.log("OS uptime:"+ os.uptime());
console.log("os.endianness():"+ os.endianness());