function Personne() {
  var that = this;
  that.âge = 0;

  setInterval(function grandir() {
    // La fonction callback se réfère à la variable `that`
    // qui est le contexte souhaité
    that.âge++;
  }, 100);
}

var p = new Personne();
console.log(p);
setTimeout(function () {
  console.log(p);
}, 2000);
