/*var http_port = process.env.PORT || 1337;
var http = require('http');
var start = function(){
 var server = http.createServer(function (req, res) {
  require('./router').get(req, res);
 });// end server()
 server.listen(http_port);
 console.log('listening to http://localhost:' + http_port);
};// end start()

exports.start = start;*/

var http = require('http')
var port = process.env.PORT || 1337;
http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}).listen(port);