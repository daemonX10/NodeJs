/* `const fs=require('fs');` is importing the `fs` module in Node.js. The `fs` module provides file
system-related functionality, such as reading and writing files. */
const fs=require('fs');

const fileName='create_if_not.txt';
const fileContent='This is the content of the file';

fs.open(fileName,'r+',function(err,fd){
    if(err){
        if(err.code==='ENOENT'){
            console.log(`file ${fileName} does not exit. Creating it...`);
            fs.writeFile(fileName,fileContent,function(err){
                if(err){
                    console.log(`Error creating file ${fileName}`,err);
                }else{
                    console.log(`File ${fileName} created Successfully`);
                    readAndClose();
                }
            });
        }
        else{
            console.log(`Error in opening  file ${fileName}`,err);
        }
    }
    else{
        console.log(`File ${fileName} Opened Successfully`);
        readAndClose();
    }
    
        function readAndClose(){
            fs.readFile(fileName,function(err,data){
                if(err){
                    console.log(`Error in reading file ${fileName} `,err);
        }
        else{
            console.log(`File ${fileName} Contents : `,data.toString());
        }
        });

        fs.close(fd,function(err){
            if(err){
                console.log(`Error Closing File ${fileName}`,err);
            }
            else{
                console.log(`File ${fileName} Closed SuccessFully`);
            }
        })
    };
});