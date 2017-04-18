function Personne() {
  // Le constructeur Personne() définit `this` comme lui-même.
  this.age = 0;

  setInterval(function grandir() {
    // En mode non strict, la fonction grandir() définit `this`
    // comme l'objet global et pas comme le `this` defini
    // par le constructeur Personne().
    this.age++;
  }, 1000);
}

var personne = new Personne();
console.log(personne);
setTimeout(function () {
  console.log("après un temps d'arrêt");
  console.log(personne);
}, 2000);
