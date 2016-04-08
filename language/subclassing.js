function Being () {
	this.living = true;
}
Being.prototype.breathes = function () {
	return true;
};

//Robert.prototype = new Being;
Robert.prototype = Object.create(Being.prototype);
function Robert () {
	this.blogs = true;
}
Robert.prototype.getsBored = function () {
	return "You betcha";
};

// Create an instance of the Robert object
var me = new Robert();

/*
	Returns "You betcha" as it's a method
	belonging to the Robert object
*/
console.log(me.getsBored());

/*
	Returns true. Since the Robert object
	doesn't have a breathes method of
	its own, it goes back in the
	prototype chain to its parent
	object, Being, and finds the
	method there
*/
console.log(me.breathes());
