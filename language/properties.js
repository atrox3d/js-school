// function f() {}; // Define a dummy constructor function.
// f.prototype = p; // Set its prototype property to p.
// return new f(); // Use f() to create an "heir" of p.



function Properties (prop) {
  this.prop = prop;
  this.addProp = function (name, value) {
    this[name] = value;
  }
}

console.log("Properties.prototype", ":", Properties.prototype);
console.log("Properties.prototype.constructor", ":", Properties.prototype.constructor);
// console.log("Properties.__proto__", ":", Properties.__proto__);
// console.log("Properties.__proto__.constructor",":",  Properties.__proto__.constructor);
console.log("/////////////////////////////////////");
console.log("/////////////////////////////////////");
console.log("/////////////////////////////////////");

function F() {
}
F.prototype= new Properties("new Properties");
F.prototype.constructor=Properties;

console.log("F.prototype", ":", F.prototype);
console.log("F.prototype.constructor", ":", F.prototype.constructor);
// console.log("F.__proto__", F.__proto__);
// console.log("F.__proto__.constructor", F.__proto__.constructor);
var f = new F("startF");
var p = new Properties("startF");

console.log("/////////////////////////////////////");
console.log("/////////////////////////////////////");
console.log("/////////////////////////////////////");

console.log("p.prop", p && p.prop);
console.log("f.prop", f && f.prop);
console.log("/////////////////////////////////////");
console.log("/////////////////////////////////////");
console.log("/////////////////////////////////////");

console.log("p", p);

p.addProp("p0", 0);
p.addProp("p1", 1);

console.log("p", p);

for(x in p) {
  //console.log(x,typeof x, p[x]);
  console.log(new Array(x,typeof x, p[x]).join(":"));
}
