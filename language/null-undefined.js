var x;
console.log(x);

if(x) console.log(x);
x = null;
console.log(x);
if(x) console.log(x);

x = x || "ohoh";
console.log(x);