// I need help :(

const fs = require('fs');

fs.readFile('identite.txt', 'utf8', (err, data) => {

  if (err) {
    throw err;
  }

  let rows = data.split('\n'),
    result = {};

  for (let i = 0; i < rows.length; i++) {
    let [cle, value] = rows[i].split(':');
    result[cle] = value;
  }

  let stringified = JSON.stringify(result, null, 4);
  console.log(stringified);
});