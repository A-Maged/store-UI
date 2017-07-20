const path = require('path');
const http = require('http');
const fs = require('fs');

const port = 80;
const server = http.createServer();


server.on('request', (req, res)=>{

    switch (req.url){     
        case '/app.js':
            res.writeHead(200, {'Content-Type': 'application/javascript'});
            res.end(fs.readFileSync('./dist/app.js'));
            break;
	   
		case '/images/loading.gif':
            res.writeHead(200, {'Content-Type': 'image/gif'});
            res.end(fs.readFileSync('./dist/images/loading.gif'));
            break;

		default:
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end(fs.readFileSync('./dist/index.html'));
			break;		
    }   
});


server.listen(port, function() {
    console.log(`listening on http://127.0.0.1:${port}`)  
});

