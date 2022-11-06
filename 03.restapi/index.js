const  express = require('express');
const  app = express();
app.get('/', function(req, res){
    res.send('Welcome')
})
app.get("/api/users", function(req, res){
    res.send('Welcome you are at the database now');
})
app.listen(3000,()=>console.log('listening on port 3001'));
