var countWords = function(sentence){
  return sentence.split(" ").length;
};

var makeAdder = function(number){
  return function(num){
    return num + number;
  }
};

var forEach = function(array, func){
  for(var i = 0; i < array.length; i++){
    func(array[i]);
  }
};

var map = function(array, func){
  var dummy = [];
  forEach(array, function(element){
    dummy.push(func(element))
  });
  return dummy
};

// var map = function(array, func){
//   for(var i = 0; i < array.length; i++){
//     array[i] = func(array[i]);
//   }
//   return array;
// };

var filter = function(array, func){
  var dummy = [];
  forEach(array, function(element){
    if(func(element)){
      dummy.push(element);
    }
  });
  return dummy;
};


// var filter = function(array, func){
//   var dummy = [];
//   for(var i = 0; i < array.length; i++){
//     if(func(array[i])){
//       dummy.push(array[i]);
//     }
//   }
//   return dummy;
// };

var contains = function(array, num){
  var bool = "";
  for(var i in array){
    if(array[i] == num){
      bool = true;
      break;
    }
    else{
    console.log(array[i])
      bool = false;
    }
  }
  console.log(bool)
  return bool;
};

// var contains = function(array, num){
//   var bool = "";
//   for(var i in array){
//     if(array[i] == num){
//       bool = true;
//       break;
//     }
//     else{
//     console.log(array[i])
//       bool = false;
//     }
//   }
//   console.log(bool)
//   return bool;
// };

var reduce = function(array, starting, func){
  forEach(array, function(element){
    starting = func(starting, element)
  });
  return starting;
};


// var reduce = function(array, starting, func){
//   dummy = 0;
//   for(var i = array.length-1; i > -1; i-=2){
//     dummy = func(array.pop(), array.pop());
//     if(dummy){
//         array.push(dummy);
//     }
//   }
//   return dummy;
// };


var countWordsInReduce = function(starting, string){
  return starting + string.split(" ").length
}

var sum = function(array){
  return reduce(array, 0, function(a, b) {
      return a+b;
  });
};

var every = function(array, func){
  dummy = true
  forEach(array, function(element){
    if(!func(element)){
      dummy = false
    }
  });
  return dummy
};

// var every = function(array, func){
//   dummy = true
//   for(var i = 0; i<array.length; i++){
//     dummy = func(array[i]);
//     if(!dummy){
//       break;
//     }
//   }
//   return dummy

// };

var any = function(array, func){
  return !every(array, function(element){
    if(!func){
      return !element
    }
    else{
      return !func(element)
    }
  })
}

// var any = function(array, func){
//   dummy = false
//   for(var i = 0; i<array.length; i++){
//     if(func){
//       dummy = func(array[i]);
//     }
//     else{
//       dummy = array[i]
//     }
//     if(dummy){
//       break;
//     }
//   }
//   return dummy
// }

var once = function(func){
  var numberOfTimesRun = 0;
  return function() {
    if(numberOfTimesRun === 0) {
      numberOfTimesRun++;
      return func();
    }

  };
}
;

var wrapper = function(component, func){
  return function() {
    var block = component
    return func(block);
  }
}






















