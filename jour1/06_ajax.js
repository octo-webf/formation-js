function isMyServerGood() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log('Santé de mon serveur : ' + this.responseText);
    }
  };
  console.log('Est-ce que mon serveur va bien ?');
  xhttp.open("GET", "http://monserveur.fr/ping", true);
  xhttp.send();
  console.log('J’attends la réponse ...');
}


isMyServerGood();