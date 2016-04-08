var scope="globale";
console.log(scope);     // globale

function checkscope() {
  console.log(scope);   // undefined
  function nested() {
    var scope ="        annidato";
    console.log(scope); // annidato
  }

  var scope = "    locale";
  nested();
  console.log(scope);   // annidato
}

checkscope();
console.log(scope);   // globale

////////////////////////////////////////////////////////////////////////////////
var boh;
console.log(boh); //undefined

var i = 1;
console.log(i++); // 1
////////////////////////////////////////////////////////////////////////////////
function f(x) {return x * x};
console.log(f(4));
var f = new Function( "x", "return x * x" );
console.log(f(4));
var f = function (x) {return x * x};
console.log(f(4));
////////////////////////////////////////////////////////////////////////////////
function arg() {
  console.log(arguments.callee);
  console.log(arguments.caller); // deprecated

  console.log("arguments: ");
  console.log(arguments);

  console.log("loop through arguments");
  for (var i = 0; i < arguments.length; i++) {
     console.log(arguments[i]);
   }
   console.log("----------------");
   for (var x  in arguments) {
     if (arguments.hasOwnProperty(x  )) {
        console.log(x + ":" + arguments[x]);
     }
   }
}

arg(1,2,3,4);

console.log("function.length:" + arg.length);
console.log("function.arity:" + arg.arity);
console.log("arguments.length:" + arguments.length);
////////////////////////////////////////////////////////////////////////////////


unique.counter=0;
function unique () {
  return unique.counter++;
}

console.log(unique());
console.log(unique());
////////////////////////////////////////////////////////////////////////////////
var literalobj = {
  name: "literal",
  type: "object!"
}

function dumpobj(obj) {
  for (var varx in obj) {
    if (obj.hasOwnProperty(varx)) {
        console.log(varx + ":" + obj[varx]);
    }
  }
}


dumpobj(literalobj);
////////////////////////////////////////////////////////////////////////////////

function Rectangle(w,h) {
  this.w = w;
  this.h = h;
  Rectangle.namer = function() {return "rectangle";}
  Rectangle.prototype.area = function() {return this.w * this.h;}
  Rectangle.prototype.toString = function() {return "rectangle: " + w + " x " + h;}
}

r = new Rectangle(10,30);
console.log(r);

console.log("area:" + r.area());
console.log(Rectangle.prototype);
console.log(Rectangle.namer());
console.log(r.toString());
console.log(typeof r);
console.log(r.constructor == Rectangle);



