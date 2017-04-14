function Personne() {
  // Le constructeur Personne() définit `this` comme lui-même.
  this.âge = 0;

  setInterval(function grandir() {
    // En mode non strict, la fonction grandir() définit `this`
    // comme l'objet global et pas comme le `this` defini
    // par le constructeur Personne().
    this.âge++;
  }, 1000);
}

var p = new Personne();
console.log(p);
setTimeout(function () {
  console.log(p);
}, 2000);
