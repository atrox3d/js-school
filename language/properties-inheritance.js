function P (prop) {
  this.prop = prop;
  this.prop1 = prop + "1";
  this.addProp = function (name, value) {
    this[name] = value;
  }
}

var p = new P("P.prop");
console.log(p.prop);
console.log(p.prop1);
console.log(Object.keys(p));
console.log(Object.getOwnPropertyNames(p));

console.log("################################################################");
function F() {
  this.prop1 = "f.prop1"; //shadow!
  // F.prototype = p; // questo non funziona
}
F.prototype = new P("new p");
F.prototype.constructor = P;

var f = new F("F.prop");
console.log("f.prop:", f.prop);
console.log("f.prop1:", f.prop1);
console.log(f && f.prop1);
console.log(f.prop1 && f);

f.prop = "overwrite f.prop";
console.log("f.prop:", f.prop);
delete f.prop
console.log("f.prop:", f.prop);
console.log(f.prop1);
console.log("################################################################");
var ff = Object.create(f);
console.log("ff:",ff);
console.log(ff.prop1);
console.log("################################################################");
var oc = Object.create({prop:"oc.prop"});
console.log("oc:", oc);
console.log(oc.prop);
console.log("################################################################");
console.log(Object.keys(oc));
console.log(Object.getOwnPropertyNames(oc));
