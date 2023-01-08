const http = require('http');

http.createServer((req, res)=>{
    res.writeHead(404);
    res.write("Escuchando 3001", { 'Content-Type':'text/plain' });
    res.end();
})
.listen(3001)