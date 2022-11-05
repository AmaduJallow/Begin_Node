const fs = require('fs');

fs.readdir("./",function(err,filename){
    if (!err){
        console.log(filename);
    }
    else{
        console.log(err);
    }
});
