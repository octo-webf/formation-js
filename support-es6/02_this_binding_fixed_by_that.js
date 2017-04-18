function Personne() {
  var that = this;
  that.age = 0;

  setInterval(function grandir() {
    // La fonction callback se réfère à la variable `that`
    // qui est le contexte souhaité
    that.age++;
  }, 100);
}
var personne = new Personne();
console.log(personne);
setTimeout(function () {
  console.log("après un temps d'arrêt");
  console.log(personne);
}, 2000);
