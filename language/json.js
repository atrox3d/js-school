var o = {
  name:"roby",
  age:45,
  hello:function(){console.log("hello");}
}
var s = JSON.stringify(o);
console.log(s);