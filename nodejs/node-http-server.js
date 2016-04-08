var http = require("http");
var fs = require("fs");
var qs = require('querystring');

var server = new http.Server();
server.listen(8000);

server.on("request", function(request, response) {
  var url = require("url").parse(request.url);
  console.log("request");
  console.log(request.connection.remoteAddress);

  if(url.pathname === "/test/delay") {
    console.log("request/test/delay");
    var delay = parseInt(url.query) || 2000;
      response.writeHead(200, {"content-type":"text-plain; charset=UTF-8"});
      response.write("sleeping for " + delay + " milliseconds...");

      setTimeout(function() {
        response.write("done");
        response.end();
      }, delay);
    } else if(url.pathname === "/test/mirror") {
      var body = "";
      console.log("request/test/mirror");

      console.log("write head");
      console.log({
          status:200,
          content:{"content-type":"text-plain; charset=UTF-8"}
      });
      response.writeHead(200, {"content-type":"text-plain; charset=UTF-8"});

      console.log("method:", request.method, "url:", request.url);
    //   response.write(request.method + " " + request.url);
    //   response.write("\n");

      console.log("headers:");
    //   response.write("\n");
    var json = false;
      for(var h in request.headers) {
        console.log(h, ":", request.headers[h]);
        if(h=="content-type" && ~(request.headers[h]).indexOf("json")) {
            json = true;
        }
        // response.write(h + ": " + request.headers[h] + "\n");
      }
    //   response.write("\n");

      request.on("data", function(chunk) {
        console.log("ondata:", chunk.toString("utf-8"));
        body += chunk.toString("utf-8");
        response.write(chunk);
      });
      request.on("end", function(chunk) {
        //console.log("onend:", chunk.toString());
        if(json) {
            body = JSON.parse(body);
            for (var name in body) {
                if (body.hasOwnProperty(name)) {
                    console.log(name, body[name]);
                }
            }
        }
        console.log("server:","body:", body);
        response.write("\n");
        response.write("end of transmission");
        response.end();
      });
    } else {
      var filename = url.pathname.substring(1);
      console.log("filename:", filename);
      console.log("cwd:", process.cwd());

      var type, ext, dot;
      dot = filename.lastIndexOf(".") + 1;
      ext = filename.substring(dot);

      console.log(dot, ext);

      switch(ext) {
        case "xml" : type ="text/xml"; break;
        case "json" : type ="application/json"; break;
        case "html":
        case "htm": type = "text/html; charset=UTF-8"; break;
        case "js": type = "application/javascript; charset=UTF-8"; break;
        case "css": type = "text/css; charset=UTF-8"; break;
        case "txt" : type = "text/plain; charset=UTF-8"; break;
        case "manifest": type = "text/cache-manifest; charset=UTF-8"; break;
        case "jpg":
        case "png": type = "image/" + ext; break;
        default: type = "application/octet-stream"; break;
      }

      fs.readFile(filename, function(err, content){
        if(err) {
          response.writeHead(404, {
            "Content-type" : "text-plain; charset=UTF-8"
          });
          response.write(err.message);
          response.end();
        } else {
          response.writeHead(200, {
            "Content-disposition" : "inline" // visualizza
          });
          response.writeHead(200, {
            "Content-type" : type
          });
          response.write(content);
          response.end();
        }
      });
    }
});