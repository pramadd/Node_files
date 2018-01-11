
var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response){
console.log('client request URL: ', request.url);

//<<=================   Root route =============================>>>
    if(request.url === '/') {
        fs.readFile('views/index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  
            response.write(contents);  
            response.end(); 
        });
    }

//<<=================   Cars view =============================>>>
    else if(request.url === '/cars') {
        fs.readFile('views/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  
            response.write(contents);  
            response.end(); 
            console.log('==========cars views===============');
        });
    }

    else if(request.url === '/images/cars.jpg'){
        fs.readFile('./images/cars.jpg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpg'});  
            response.write(contents);  
            
            response.end(); 
            console.log('=====   cars images===============');
        });
    }
    else if(request.url === '/stylesheets/styles.css'){
        fs.readFile('./stylesheets/styles.css', 'utf8', function(errors, contents){
         response.writeHead(200, {'Content-type': 'text/css'});
         response.write(contents);
         response.end();
         console.log('====    styles===============');
        });
      }
//<<=================   Cats view =============================>>>
    else if(request.url === '/cats') {
            fs.readFile('views/cats.html', 'utf8', function (errors, contents){
                response.writeHead(200, {'Content-Type': 'text/html'});  
                response.write(contents);  
                
                response.end(); 
            });
        }
    
        else if(request.url === '/images/cats.jpg'){
           fs.readFile('./images/cats.jpg', function (errors, contents){
               response.writeHead(200, {'Content-Type': 'images/jpg'});  
               response.write(contents);  
               
               response.end(); 
           });
       
       }
       else if(request.url === '/stylesheets/styles.css'){
        fs.readFile('./stylesheets/styles.css', 'utf8', function(errors, contents){
         response.writeHead(200, {'Content-type': 'text/css'});
         response.write(contents);
         response.end();
         console.log('====    styles===============');
        });
      }
//<<=================  New Car =============================>>>
       else  if(request.url === '/cars/new'){
           fs.readFile('views/new.html', 'utf8', function (errors, contents){
               response.writeHead(200, {'Content-Type': 'text/html'}); 
               response.write(contents);  
               response.end(); 
           });
       }
//<<=================   Error Display =============================>>>
       else {
           response.writeHead(404);
           response.end('File not found!!!');
       }

    });
    
    server.listen(7077);
    
    console.log("Running in localhost at port 7077");
   
   
        






