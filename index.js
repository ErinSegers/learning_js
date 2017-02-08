var express = require('express');
var server = express();
var port = 8080;

//this line is wriring up a server power called express.static
//it allows the server to serve static files from a directory
server.use(express.static(__dirname + '/public'));

server.listen(port, function(){
  console.log('now listening on port...', port);
});
