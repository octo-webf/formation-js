require('es6-promise');
let qhttp =require('q-io/http');

'use strict';

qhttp.read("http://localhost:7000/")
    .then(function (id) {
    	return qhttp.read("http://localhost:7001/"+id)
    })
    .then(function (json) {
  		console.log(JSON.parse(json));
	})
	.then(null, console.error)
    .done()