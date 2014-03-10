var Mammal = function(name, color){
  this.color = color
  this.name = name;
  this.offspring = [];
}

Mammal.prototype.sayHello = function () {
    return "My name is " + this.name + ", I'm a Mammal"
};

Mammal.prototype.haveBaby = function () {
    var newbaby = new Mammal("Baby " + this.name);
    this.offspring.push(newbaby);
    return newbaby;
};


var Cat = function(name, color){
  Mammal.call(this, name, color);
};

Cat.prototype = Object.create(Answer.prototype);

Cat.prototype.haveBaby = function(color) {
    var newcat = new Cat("Baby "+this.name, color);
    this.offspring.push(newcat);
    return newcat;
};
