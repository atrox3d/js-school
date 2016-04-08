var get = require("./httputils").get;
var post = require("./httputils").post;
var output = "";

var callback = function(status, headers, body) {
  //console.log("status:", status);
  //console.log("headers", headers);
  if(body) {
  output += body;
  console.log("callback", "body:", body);
  console.log("callback", "output:", output);
}

}
// get("http://localhost:8000");
// console.log("delay");
// get("http://localhost:8000/test/delay", callback);
// console.log("mirror");
// get("http://localhost:8000/test/mirror", callback);
// console.log("file");
// get("http://localhost:8000/bower.json", callback);
var data = {
  user: "roby",
  password: "magalli"
}
console.log("post", data);
post("http://localhost:8000/test/mirror", data, callback);



