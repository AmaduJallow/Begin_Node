const http = require('http');

const server= http.createServer((request,response)=>{
    if (request.url ==="/"){
        response.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<main>
    <section>
        <h1>This is the header here</h1>
    </section>

</main>
<footer>

</footer>

</body>
</html>`)
        response.end();
    }
});

server.on('connection',(socket)=>{
    console.log("There is a connection")
});
server.listen(3000);
console.log("Listening to http://localhost:3000");