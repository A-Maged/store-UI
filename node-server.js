const path = require('path');
var http = require('http');
var fs = require('fs');

var port =80;
var server = http.createServer();


server.on('request', (req, res)=>{

    switch (req.url){
        case '/':
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(fs.readFileSync('./dist/index.html'));
            break;
       
        case '/index.html':
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(fs.readFileSync('./dist/index.html'));
            break;
        
        case '/app.js':
            res.writeHead(200, {'Content-Type': 'application/javascript'});
            res.end(fs.readFileSync('./dist/app.js'));
            break;
        default:
            res.writeHead(404, {"Content-Type": "text/html"});
            res.write('not found');
            res.end();            
            break;            
    }   
});


server.listen(port, function() {
    console.log(`listening on http://127.0.0.1:${port}`)  
});

