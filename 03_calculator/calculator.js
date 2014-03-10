function Calculator() {
  this.value = function(numbers){
    dummy = 0
    for(var i = 0; i < this.array.length; i++){
      dummy += this.array[i];
    }
    return dummy;
  };
  this.array = []

  this.add = function(number){
    this.array.push(number)
  };

  this.subtract = function(number){
    this.array.push(-number)
  };
};

