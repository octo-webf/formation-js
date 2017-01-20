const fs = require('fs');

fs.readFile('identite.txt', 'utf8', (err, text) => {
  if (err) throw err;

  let lines = text.split('\n');
  let identity = {};

  lines.forEach((line) => {
    let information = line.split(':');
    identity[information[0]] = information[1];
  });

  console.log(identity);

});


