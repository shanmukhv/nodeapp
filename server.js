/*
http = require('http');
http.createServer(function(req,res){
	res.writeHead(200,{'Content-type':'text/plain'});
	res.end('Sri 1008 Prabhuji');
	
}).listen(1337,'127.0.0.1');

console.log('web server has started');
*/

http = require('http');
 fs =  require('fs');
 path = require('path'),    
 filePath = path.join(__dirname, 'index.html');

http.createServer(function(req,res){
	fs.readFile(filePath,function(err,data){
		res.writeHead(200,{'Content-Type': 'text/html'});
	    return res.end(data);
	});
	
}).listen(1337,'127.0.0.1');

console.log('web server has started');