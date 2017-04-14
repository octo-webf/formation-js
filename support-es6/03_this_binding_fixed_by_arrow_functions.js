function Personne(){
  this.âge = 0;

  setInterval(() => {
    this.âge++;
    // |this| fait bien référence
    // à l'objet personne
  }, 100);
}

var p = new Personne();
console.log(p);
setTimeout(function () {
  console.log(p);
}, 2000);
