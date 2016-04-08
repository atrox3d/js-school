console.log("hello");

var x = 5;

var y = {
  name: "robb",
  surname: "boh"
}

console.log(y);

var flight = {
  airline: "Oceanic",
  number: 815,
  departure: {
    IATA: "SYD",
    time: "2004-09-22 14:55",
    city: "Sydney"
  },
  arrival: {
    IATA: "LAX",
    time: "2004-09-23 10:42",
    city: "Los Angeles"
  },
  f : function() {
    return this.departure.city + "-" + this.arrival.city;
  }
};

console.log(flight["departures"] || "none");
console.log(typeof flight);
console.log(flight.f() );

console.log(Object.prototype.method);
Function.prototype.method = function(name,func) {
  this.prototype[name] = func;
  return this;
}
console.log(Object.prototype.method);

console.log(flight);
console.log(flight.prototype);

flight.method('fly', function() {
  return "woooosh";
})
console.log(flight);
