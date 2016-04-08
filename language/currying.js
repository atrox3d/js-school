//////////////////////////////////////////////////////////////////////// binding
function sum(b) {return this.a + b;};
var obj = {a:5};
var summ = sum.bind(obj);

console.log(summ(1));
/////////////////////////////////////////////////////////////////////// currying
function multiply(a,b) {return a*b;};
var multiplyby2 = multiply.bind(null, 2);

console.log(multiplyby2(5));

