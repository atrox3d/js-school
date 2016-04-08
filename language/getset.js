//------------------------------------------------------------------------------
// su una classe
//------------------------------------------------------------------------------
function Person(name, surname) {
  this.name = name;
  this.surname = surname;

  Object.defineProperty(Person.prototype, "fullName", {
    get: function() {return this.surname + ' ' + this.name;  }
  })
  // Person.prototype.fullName = {
  //   get fullName() {return this.surname + ' ' + this.name;  }
  // };
}

p = new Person("roby", "lombardo");
console.log(p.fullName);

//------------------------------------------------------------------------------
// su un literal
//------------------------------------------------------------------------------
var person = {
  name: "roby",
  surname: "lombardo",
  get fullName() {
    return this.surname + ' ' + this.name;
  }
}

console.log(person.fullName);
