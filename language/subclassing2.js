function Base(base) {
  this.base = base;
  console.log("Base.constructor");
}
Base.prototype.getbase = function() {console.log("getbase:", this.base);};
Base.staticValue = 0;
Base.staticMethod = function() {
  console.log("base.staticMethod", ++ Base.staticValue);
}

var base = new Base("Base.base");
base.getbase();

Sub.prototype = Object.create(Base.prototype);
console.log(Sub.prototype.constructor === Sub);   // false
console.log(Sub.prototype.constructor === Base);  // true
Sub.prototype.constructor = Sub;
console.log(Sub.prototype.constructor === Sub);   // true
console.log(Sub.prototype.constructor === Base);  // false
function Sub(base,sub) {
  Base.call(this, base);
  this.sub = sub;
}

var sub = new Sub("base", "sub");
sub.getbase();
Base.staticMethod();
Base.staticMethod();
Base.staticMethod();
Base.staticMethod();
Base.staticMethod();