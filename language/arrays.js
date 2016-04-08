//var ar = new Array();
var ar = [];
console.log("ar:", ar, "length:", ar.length);

ar[0] = 1;
ar[6] = 5;
ar[10] = 11;
console.log(ar, ar.length); // sparse


for(var i in ar) {  // cicla solo sugli indici esistenti
  console.log("for:", i, ar[i]);
}

ar.forEach( // sicuramente in ordine
  function(x) {
    console.log("foreach:", x);
  }
);

console.log("join:", ar.join());
console.log("join:", ar.join(":"));
console.log("reverse:", ar.reverse().join());
console.log("filter:", ar.filter(function(x){return x?true:false}));
ar.reverse();
console.log("after reverse#2:", ar);
console.log("map++:", ar.map(function(x){return ++x}));
console.log("indexof:", ar.indexOf(5));
console.log("prova".indexOf("ov"));



var s = "string-test";
console.log("charAt:", s.charAt(2));
console.log("[]:", s[2]);
var join = Array.join || function(a,sep) { return Array.prototype.join.call(a,sep)};
console.log(join(s," "));


