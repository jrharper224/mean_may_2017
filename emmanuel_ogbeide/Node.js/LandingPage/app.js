var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response){
    console.log('client request URL: ', request.url);

    if(request.url === '/') {
        fs.readFile('index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            console.log(contents)
            response.write(contents);
            response.end();
        });

    }
    else if (request.url === "/ninjas") {
         fs.readFile('ninjas.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents);
             response.end();
         });
    }
    else if (request.url === "/dojos/new") {
         fs.readFile('dojos.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents);
             response.end();
         });
    }
    else if (request.url === '/stylesheets/style.css'){
      console.log(request.url)
      fs.readFile('./stylesheets/style.css', 'utf8', function (errors, contents){
        response.writeHead(200, {'Content-Type': 'text/css'});
        console.log(contents)
        response.write(contents);
        response.end();
      });
    }
    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }
});
server.listen(8000);
console.log("Running in localhost at port 8000");
