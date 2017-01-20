function Animal() {

  var age = 0;

  function printAge() {
    console.log('#Animal - age = ' + age);
  }

  function increaseAge() {
    age++;
  }

  function _privateMethod() {
    console.log('#Animal - hidden method called');
  }

  return {
    printAge: printAge,
    increaseAge: increaseAge
  };

}

var animal = new Animal();
animal.printAge();
animal.increaseAge();
animal.printAge();

console.log('#global - animal.age = ' + animal.age);
animal._privateMethod();
