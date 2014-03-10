var f2c= function(temp){
  if(temp!==0){
    temp = (temp - 32) * 0.55555
  }
  else{
    temp = 0
  }
  return Math.round(temp * 100)/100
}

var c2f = function(temp){
  if(temp!==32){
    temp = temp / 0.55555 + 32
  }
  else{
    temp = 32
  }
  return Math.round(temp * 100)/100
}

var Temperature = function(param){

  this.setFahrenheit = function(temp){
    this.fStore = temp
    if(temp!==0){
    temp = (temp - 32) * 0.55555
    }
    else{
      temp = 0
    }
    this.cStore = Math.round(temp * 100)/100
  }
  this.setCelcius = function(temp){
    this.cStore = temp
    if(temp!==32){
    temp = temp / 0.55555 + 32
    }
    else{
      temp = 32
    }
    this.fStore = Math.round(temp * 100)/100
  }
  this.fahrenheit= function(){
    return this.fStore
  }
  this.celcius = function(){
    if(param){
      this.setFahrenheit(param)
    }
    return this.cStore
  }
}

//  Best Practice: do not use this.fStore for data stores
//  this way outside users cannot access the data stores
//  this is the only way to create pirvate vairables in Javascript
// var Temperature = function(param){
//   var fStore = 0
//   var cStore = 0
//   this.setFahrenheit = function(temp){
//     fStore = temp
//     if(temp!==0){
//     temp = (temp - 32) * 0.55555
//     }
//     else{
//       temp = 0
//     }
//     cStore = Math.round(temp * 100)/100
//   }
//   this.setCelcius = function(temp){
//     cStore = temp
//     if(temp!==32){
//     temp = temp / 0.55555 + 32
//     }
//     else{
//       temp = 32
//     }
//     fStore = Math.round(temp * 100)/100
//   }
//   this.fahrenheit= function(){
//     return fStore
//   }
//   this.celcius = function(){
//     if(param){
//       setFahrenheit(param)
//     }
//     return cStore
//   }
}

