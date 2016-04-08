var F = function() {};
var p = F.prototype;
var c = p.constructor;
console.log("function:",F, "F.prototype:",p, "F.prototype.constructor:", c);
console.log("F === F.prototype.constructor:", F === F.prototype.constructor);
console.log("-----------------------------------------------------------------");

function Class(a, b) {
  this.a = a;
  this.b = b;
  console.log("new Class(", a, ", ", b, ")");
}

Class.prototype = {
  output: function() {return [this.a,this.b].join(", ");},
  constructor: Class
}

console.log("Class");
console.log("prototype:", Class.prototype);
console.log("constructor:",Class.constructor);
console.log("prototype.constructor:", Class.prototype.constructor);
console.log("-----------------------------------------------------------------");

cl = new Class(1,2);
console.log("new Class", cl);
console.log("cl.output:", cl.output());
console.log("cl.constructor", cl.constructor);
console.log("cl.constructor === Class", cl.constructor === Class);
//console.log("cl.constructor.prototype:", cl.constructor.prototype);
cl.constructor(3, 4);

console.log("typeof cl:", typeof cl);
console.log("cl instanceof Class:", cl instanceof Class);
console.log("-----------------------------------------------------------------");
console.log("Class2");
function Class2(a, b) {
  this.a = a;
  this.b = b;
  console.log("new Class2(", a, ", ", b, ")");
}

//Class2.prototype.output =  function() {return [this.a,this.b].join(", ");};
Class2.prototype = Class.prototype;
Class2.prototype.constructor = Class2;

var o = new Class2(7,8)
console.log(o.output());
Class2.prototype.test = function(){console.log("test");};
o.test();
