// Animal sera utilisé comme prototype de Horse
var Animal = {
  age: 10,

  printType: function() {
    console.log('Je suis un animal');
  }
};

// Horse est une simple fonction qui définit des attributs internes (constructor)
function Horse() {
  this.talks = function () {
    console.log('Huuu Hu Hu Hu !');
  };
}

//A partir de maintenant toutes les nouvelles instances de Horse auront Animal comme prototype
Horse.prototype = Animal;

// Un nouvel objet horse qui a comme prototype Animal
var horse = new Horse();

// Méthode liée au constructeur
horse.talks();
// Méthode trouvée en remontant la chaine de prototypage
horse.printType();
//L'age de horse définit par le constructeur
console.log('horse.age = ' + horse.age);

//Définition d'une "instance" d'animal grace à Object.create
var animal = Object.create(Animal);
console.log('animal.age = ', animal.age);

//Redéfinition dynamique de l'age du prototype (dangereux)
Horse.prototype.age = 30;
console.log('horse.age = ' + horse.age);

// ooops, on a redefinit 'age' pour tous les héritiers du prototype Animal
console.log('animal.age = ', animal.age);