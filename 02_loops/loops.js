var repeat = function(a, b){
  var dummy = ""
  for (var i = 0; i < b; i++){
    dummy += a;
  }
  return dummy
};

var join = function(array, delimiter){
  if(!delimiter){
    var dummy = "";
    for (var i =0; i < array.length; i++){
      dummy += array[i]
    }
  }
  else {
    var dummy = "";
    for (var i =0; i < array.length; i++){
      if(i === array.length - 1 ){
        dummy += array[i];
      }
      else {
      dummy += array[i] + delimiter
      }
    }
  }
  return dummy;
}


var sum = function(array){
  var dummy = 0;
  for (var i = 0; i < array.length; i++){
    dummy += array[i];
  }
  return dummy;
}

var paramify = function(object){
  var dummy = [];
  var counter = 0;
  for(var i in object){
    if (object.hasOwnProperty(i)){
      dummy.push(i + "=" + object[i]);
    }
  }
  return join(dummy.sort(), "&");
}


var factorial = function(number) {
  var dummy = 1;
  for (var i = number; i>0; i--) {
    dummy*= i;
  }
  return dummy;
}

var concat_string = function(stuff) {
  var dummy = "";
  for (var i = 0; i < arguments.length; i++) {
    dummy +=arguments[i];
  }
  return dummy;
}
