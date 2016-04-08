// usare putty/raw/localhost:2000
var net = require("net");
var server = net.createServer();
server.listen(2000, function() {console.log("listening on port 2000");});

server.on("connection", function(stream) {
  console.log("accepting connection from ", stream.remoteAddress);
  stream.on("data", function(data) {stream.write(data);});
  stream.on("end", function(data) {console.log("connection closed");});
});