Object.defineProperty(Object.prototype, "sayHello", {
  value: function() {
    console.log("hello");
  }
});

var x = new function() {};
x.sayHello();

delete Object.prototype.sayHello;

var y = new function() {};
y.sayHello();

console.log(Object.getOwnPropertyNames(Object.prototype));
console.log(Object.isPrototypeOf(y));

function classof(o) {
  if (o === null) return "Null";
  if (o === undefined) return "Undefined";
  return Object.prototype.toString.call(o).slice(8, -1);
}

console.log(classof(null));
console.log(classof(y));
console.log(classof("hey"));
console.log(classof(5));
console.log(classof(true));

console.log(Object.isExtensible(y));



// /*
//  * Add a nonenumerable extend() method to Object.prototype.
//  * This method extends the object on which it is called by copying properties
//  * from the object passed as its argument. All property attributes are
//  * copied, not just the property value. All own properties (even non-
//  * enumerable ones) of the argument object are copied unless a property
//  * with the same name already exists in the target object.
//  */
// Object.defineProperty(Object.prototype,
//   "extend", // Define Object.prototype.extend
//   {
//     writable: true,
//     enumerable: false, // Make it nonenumerable
//     configurable: true,
//     value: function(o) { // Its value is this function
//       // Get all own props, even nonenumerable ones
//       var names = Object.getOwnPropertyNames(o);
//       // Loop through them
//       for (var i = 0; i < names.length; i++) {
//         // Skip props already in this object
//         if (names[i] in this) continue;
//         // Get property description from o
//         var desc = Object.getOwnPropertyDescriptor(o, names[i]);
//         // Use it to create property on this
//         Object.defineProperty(this, names[i], desc);
//       }
//     }
//   });