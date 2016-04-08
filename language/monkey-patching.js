function trace(object, method) {
  var originalMethod = object[method];

  object[method] = function() {
    console.log(new Date(), "entering method", method);
      var result = originalMethod.apply(this, arguments);
    console.log(new Date(), "exiting method", method);
    return result;
  }
}

var obj = {
  message:  "hello",
  tell:     function() { console.log(this.message);}
}

obj.tell();
trace(obj, "tell");
obj.tell();

