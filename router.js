var url = require('url');
var fs = require('fs');
exports.get = function(req, res) {
 req.requrl = url.parse(req.url, true);
 var path = req.requrl.pathname;
 
 var path = url.parse(req.url).pathname;
    switch (path){
        case '/':
           require('./controllers/home').get(req, res);
            break;

        default:
            if (/\.(js|html|swf)$/.test(path)){
                try {
                    var swf = path.substr(-4) === '.swf';
                    res.writeHead(200, {'Content-Type': swf ? 'application/x-shockwave-flash' : ('text/' + (path.substr(-3) === '.js' ? 'javascript' : 'html'))});
                    res.write(fs.readFileSync(__dirname + path, swf ? 'binary' : 'utf8'), swf ? 'binary' : 'utf8');
                    res.end();
                } catch(e){ 
                    send404(res); 
                }               
                break;
            }
            else if (/\.(css)$/.test(path)){
			    res.writeHead(200, {'Content-Type': 'text/css'});
			    res.write(fs.readFileSync(__dirname + path, 'utf8')); // <--- add this line
			    res.end();
			    break;
            }
             else if (/\.(png|jpg)$/.test(path)){
             	
			    res.writeHead(200, {'Content-Type': 'text/'+ (path.substr(-3) === '.png' ? 'png' : 'jpg')});
			    var img = fs.readFileSync(__dirname + path);
			    res.end(img, 'binary');
			    break;
            }

             require('./controllers/404').get(req, res);
            break;
    }
 
 
 
 
 
 
/*
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
   		var img = fs.readFileSync(__dirname + path);
     	res.writeHead(200, {'Content-Type': 'image/png' });
     	res.end(img, 'binary');
   	}
  
  
  } else {
  	
  if (path === '/' || path === '/home') {
   require('./controllers/home').get(req, res);
   
  } else {
   require('./controllers/404').get(req, res);
   
  }
 }*/
}
