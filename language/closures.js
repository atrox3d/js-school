// la funzione ritornata conserva il valore privato della variabile
// counter che non è più in scope

var add = (function (){
  var counter = 0;
  return function() {return counter+=1;}
})()

console.log(add.toString()); // add contiene la funzione ritornata

console.log(add());
console.log(add());
console.log(add());

console.log("-------------------------------------------------------");
// in questa versione la return viene effettuata in un secondo momento
// per mantenere chiaro il concetto

var closure = function (){
  var counter = 0;
  return function() {return counter+=1;}  // funzione ritornata,
                                          // mantiene riferimento a counter
}
console.log(closure.toString());
var add2 = closure(); // assegna la neted function a add2
console.log(add2.toString());
// ad ogni esecuzione, la nested modifica counter
// che non è più in scope se non per lei stessa
// quindi diventa privata
console.log(add2());
console.log(add2());
console.log(add2());
console.log("-------------------------------------------------------");
//
// versione ad oggetti
//
function getCounter() {
  var counter = 0;
  return {
    count: function() {return counter++;},
    reset: function() {counter = 0;},
    read:  function() {console.log("counter:", counter);}
  }
}

var counter = getCounter();
counter.read();
counter.count();
counter.count();
counter.count();
counter.count();
counter.read();
counter.reset();
counter.read();
console.log("-------------------------------------------------------");
//
// versione ad oggetti con getter/setter
//
function getCounter2(counter) {
  counter = counter || 0;
  return {
    get count() {return counter++;},
    set count(x) {
      console.log("set counter:", x);
      counter = x;
    },
    read:  function() {console.log("counter:", counter);},
    reset: function() {this.count=0;},
  }
}

var counter2 = getCounter2(5);
counter2.read();
counter2.count = 7;
counter2.read();
counter2.reset();
counter2.read();
console.log("-------------------------------------------------------");
function checkargs(args) {
  console.log(arguments.callee.name,"arguments.length:", arguments.length);
  console.log(arguments.callee.name,"arguments.callee.length:", arguments.callee.length);
}
checkargs();