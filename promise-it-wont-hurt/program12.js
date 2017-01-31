require('es6-promise');
let http =require('q-io/http');

'use strict';

http.read("http://localhost:1337")
    .then(function(json) {
      console.log(JSON.parse(json));
    })
    .then(null, console.error)
    .done()

