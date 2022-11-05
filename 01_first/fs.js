const fs = require('fs');
// console.log(fs.readdirSync("./"));

fs.readdir("./",function(err,filename){
    if (!err){
        console.log(filename);
    }
    else{
        console.log(err);
    }
})