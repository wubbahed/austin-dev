	var http = require('http')
	var http_port = process.env.PORT || 3000;


http.createServer(function (req, res) {
  require('./router').get(req, res);
 }).listen(http_port);
 console.log('listening to http://localhost:' + http_port);
 
 
var start = function(){

	
	/*
 var server = http.createServer(function (req, res) {
  require('./router').get(req, res);
 });// end server()
 server.listen(http_port);
 console.log('listening to http://localhost:' + http_port);*/
};// end start()

exports.start = start;

