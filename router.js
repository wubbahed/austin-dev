var url = require('url');
var fs = require('fs');
exports.get = function(req, res) {
 req.requrl = url.parse(req.url, true);
 var path = req.requrl.pathname;

 if ((/\.(css)$/.test(path)) || (/\.(js)$/.test(path)) || (/\.(png)$/.test(path))){
 	if(/\.(css)$/.test(path)){
  		res.writeHead(200, {'Content-Type': 'text/css'});
  		fs.readFile(__dirname + path, 'utf8', function (err, data){
	  	  if (err) throw err;
   			res.write(data, 'utf8');
   			res.end();
   		});
   	}else if (/\.(js)$/.test(path)){
   		res.writeHead(200, {'Content-Type': 'text/javascript'});
  		fs.readFile(__dirname + path, 'utf8', function (err, data){
	  	  if (err) throw err;
   			res.write(data, 'utf8');
   			res.end();
   		});
   	}else {
   		console.log(path);
   		
   		/*res.writeHead(200, {'Content-Type': 'image/png' });
   		fs.readFile(__dirname + path, 'utf8', function (err, data){
   			 if (err) throw err;
    		 res.end(__dirname + path, 'binary');
    	});*/
    	 var img = fs.readFileSync(__dirname + path);
     res.writeHead(200, {'Content-Type': 'image/png' });
     res.end(img, 'binary');
   		/*res.writeHead(200, {'Content-Type': 'text/javascript'});
  		fs.readFile(__dirname + path, 'utf8', function (err, data){
	  	  if (err) throw err;
   			res.write(data, 'utf8');
   			res.end();
   		});*/
   	}
  
  
  } else {
  if (path === '/' || path === '/home') {
   require('./controllers/home').get(req, res);
  } else {
   require('./controllers/404').get(req, res);
  }
 }
}
