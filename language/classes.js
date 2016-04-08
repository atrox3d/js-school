
console.log(Complex.name);
console.log("----------------------------------------------------------------");
function Complex(a,b) {
  this.a = a;
  this.b = b;
}
Complex.prototype.complex = function() {return "complexfunction";}
console.log("prototype:", Complex.prototype);
console.log("constructor:", Complex.constructor);
console.log("prototype.constructor:", Complex.prototype.constructor);
console.log("Complex.methods:", Complex.methods);
console.log("----------------------------------------------------------------");
console.log(MoreComplex.name);
console.log("----------------------------------------------------------------");
function MoreComplex(a,b) {
  this.a = a;
  this.b = b;
}
console.log("prototype:", MoreComplex.prototype);
console.log("constructor:", MoreComplex.constructor);
console.log("prototype.constructor:", MoreComplex.prototype.constructor);
console.log("----------------------------------------------------------------");
console.log("subclassing");
console.log("----------------------------------------------------------------");
MoreComplex.prototype = new Complex(0,0);
//MoreComplex.prototype.constructor = Complex;
console.log("prototype:", MoreComplex.prototype);
console.log("constructor:", MoreComplex.constructor);
console.log("prototype.constructor:", MoreComplex.prototype.constructor);
console.log("----------------------------------------------------------------");
console.log("test");
console.log("----------------------------------------------------------------");
var c = new Complex(0,0);
console.log("c.methods:", c.methos);
console.log(c.complex());
var mc = new MoreComplex(0,0);
console.log("mc.complex():", mc.complex());
console.log(mc.length); //undefined




