var Calculator = function(){

  this.array = []
  this.storage = 0

  this.push = function(number){
    this.array.push(number)
  }

  this.plus = function(){
    if(this.array.length < 1){
      throw new Error("calculator is empty")
    }

    b = this.array.pop()
    a = this.array.pop()
    this.storage = a + b
    this.array.push(this.storage)
  }
  this.minus = function(){
    if(this.array.length < 1){
      throw new Error("calculator is empty")
    }
    b = this.array.pop()
    a = this.array.pop()
    this.storage = a - b
    this.array.push(this.storage)
  }
  this.divide = function(){
    if(this.array.length < 1){
      throw new Error("calculator is empty")
    }
    b = this.array.pop()
    a = this.array.pop()
    this.storage = a / b
    this.array.push(this.storage)
  }
  this.times = function(){
    if(this.array.length < 1){
      throw new Error("calculator is empty")
    }
    b = this.array.pop()
    a = this.array.pop()
    this.storage = a * b
    this.array.push(this.storage)
  }
  this.value = function(){
    return this.storage
  }
}
