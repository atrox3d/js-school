exports.get = function(url, callback) {
  url = require('url').parse(url);
  var hostname = url.hostname, port = url.port || 80;
  var path = url.pathname, query = url.query;
  if(query) path += query;

  // var client = require("http").createClient(port, hostname);
  var http = require("http");
  var options = {
    host: hostname,
    port: port,
    path: path,
    method: "GET"
  }
  console.log("options:", options);
  //return;

  // var request = client.request( "GET", path, {"Host" : hostname});
  var request = http.request(options, callback);
  request.end();

  request.on("response", function(response) {
    response.setEncoding("utf8");
    var body = "";
    response.on("data", function(chunk) {body+=chunk;});
    response.on("end", function() {
      if(callback) callback(response.statusCode, response.headers, body);
    });
  });
};

exports.post = function(url, data, callback) {
  url = require('url').parse(url);
  var hostname = url.hostname, port = url.port || 80;
  var path = url.pathname, query = url.query;
  if(query) path += query;

  var type;

  data = data || "";
  if(data instanceof Buffer) {
    type = "application/octet-stream";
  }
  else if (typeof data === "string") {
      type = "text/plain; charset=UTF-8";
  } else if (typeof data === "object") {
      type = "application/x-www-form-urlencoded";
  }

  console.log("httputils:", "post", "data", data);
  console.log("httputils:", "post", "type", type);
  // var client = require("http").createClient(port, hostname);
  // var request = client.request("POST", path, {
  //   "Host" : hostname,
  //   "Content-type" : type
  // });
  // var client = require("http").createClient(port, hostname);
  var http = require("http");
  var options = {
    host: hostname,
    port: port,
    path: path,
    method: "POST",
    "Content-type" : type
  }
  console.log("httputils:", "options:", options);
  var request = http.request(options, callback);

  request.write(JSON.stringify(data));
  request.end();

  request.on("response", function(response){
    response.setEncoding("utf8");
    var body = "";
    response.on("data", function(chunk) {body+=chunk;});
    response.on("end", function() {
      if(callback) callback(response.statusCode, response.headers, body);
    });
  });
};

