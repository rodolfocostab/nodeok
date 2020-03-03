var http = require('http');

var server = http.createServer(function(req, res) {
res.writeHead(200);
res.end('Ola meu NodeJS esta funcionando!!!');
});
server.listen(8080);
