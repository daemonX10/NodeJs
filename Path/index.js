const { log } = require('console');
const path=require('path')

// const filepath='D:\full stack developer\NodeJs\Path';

// console.log("sep >",path.sep);

// console.log("process.env.Path >",process.env.path);

// console.log("delimeter >",path.delimiter);

const currentFilePath=__filename;
console.log("currentFilePath >",currentFilePath);

// console.log(path.basename(currentFilePath,".js"));
// console.log(path.dirname(currentFilePath));
// console.log(path.extname(currentFilePath));
// console.log(path.parse(currentFilePath));

// const pathToFile=path.format({
//     dir:'D:\\full stack developer\\NodeJs\\Path',
//     base:'index.js'
// });
// console.log(pathToFile);

// console.log('currentfilePath >',path.isAbsolute(currentFilePath));
// console.log("currentFilePath >",path.isAbsolute("../Path/index.js"));

// console.log('join >' , path.join("D:" ,"full stact developer","NodeJs","Path","inde.js"));

console.log("path.relative >",path.relative("D:\\full stack developer\\NodeJs\\Path\\index.js","D:\\full stack developer\\NodeJs\\Path\\Path"));

console.log('resolve >',path.resolve(),__dirname);

console.log("normalize>",path.normalize("D:\\full stack developer\\NodeJs\\Path\\Path\\index.js"))