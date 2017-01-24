function test(callback) {
  console.log('A : Fonction de test');
  console.log('B : Je vais maintenant appeler la fonction de callback');

  callback();
}

function la_fin() {
  setTimeout(function () {
    console.log('C : Je suis la fin');
  }, 5)
}

function fin_alternative() {
  console.log('D : Je suis la fin alternative');
}

function toto() {
  console.log('E : Je suis la fonction toto');
}

console.log('F : J appelle ma function test qui appellera à la fin automatiquement ma callback');

test(la_fin);
toto();
test(fin_alternative);

