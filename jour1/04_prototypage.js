var Animal = {
  age: 10,

  printType: function() {
    console.log('Je suis un animal');
  }
};

function Horse() {

  this.age = 20;

  this.talks = function () {
    console.log('Huuu Hu Hu Hu !');
  };
  
  return this;
}

Horse.prototype = Animal;

var horse = new Horse();
horse.printType();
horse.talks();
console.log('horse.age = ' + horse.age);

Horse.prototype.age = 30;
console.log('horse.age = ' + horse.age);
