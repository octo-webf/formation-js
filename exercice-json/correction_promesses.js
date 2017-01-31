const fs = require('fs');
const request = require('request');


function readFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        return reject(err);
      }
      const res = {};
      const lines = data.split('\n');
      lines.forEach((line) => {
        const [key, val] = line.split(':');
        res[key] = val;
      });
      return resolve(res);
    });
  });
}

function fetchAPI(res) {
  return new Promise((resolve, reject) => {
    request('http://swapi.co/api/people/', (err, response, body) => {
      if (err) {
        return reject(err);
      }
      const newRes = res;
      newRes.personnage_prefere = JSON.parse(body).results;
      return resolve(newRes);
    });
  });
}

readFile('identite.txt')
  .then(fetchAPI)
  .then(console.log)
  .catch(console.error);