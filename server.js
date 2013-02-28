var http_port = process.env.PORT || 3000;
var http = require('http');
var start = function(){
	var http = require('http')
	var port = process.env.PORT || 3000;
http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}).listen(port);
	
	/*
 var server = http.createServer(function (req, res) {
  require('./router').get(req, res);
 });// end server()
 server.listen(http_port);
 console.log('listening to http://localhost:' + http_port);*/
};// end start()

exports.start = start;

