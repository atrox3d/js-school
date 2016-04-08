//require("Y:/dev/IngloriousCoderz/mygetreel/webapp/js-school/inherit-extend.js");
require("./inherit-extend");
//inherit(null);


//setTimeOut( function() {console.log("hello 1000");}, 1000);
console.log("process.version:", process.version);
console.log("process.argv:", process.argv);
console.log("process.cwd():", process.cwd());
console.log("process.chdir:", process.chdir("js-school"));
console.log("process.cwd():", process.cwd());
//require("inherit-extend.js");
process.on("exit", function() { console.log("Goodbye"); });

var fs = require("fs"),
    path = require("path");

var dir = process.cwd();
console.log("dir", dir);
if(process.argv.length > 2) dir = process.argv[2];
console.log("dir", dir);

var files = fs.readdirSync(dir);

console.log(files);

files.forEach(function (filename) {
  const TAB = "\t";
  const LF = "\n";
  var fullname = path.join(dir,filename);
  var stats = fs.statSync(fullname);
  if(stats.isDirectory()) filename += "/";
  process.stdout.write(filename + TAB + stats.size + TAB + stats.mtime + LF);
});

