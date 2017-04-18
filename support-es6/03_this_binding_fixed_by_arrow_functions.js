function Personne() {
  this.age = 0;

  setInterval(() => this.age++, 100);
}

const personne = new Personne();
console.log(personne);
setTimeout(function () {
  console.log("après un temps d'arrêt");
  console.log(personne);
}, 2000);
