require('es6-promise');

'use strict';

function parsePromised () {
	promise();
}

let promise = new Promise(function(fulfill,reject){
	JSON.parse(process.argv[2])
	.then(fulfill, reject);
})


promise.then(console.log).catch(console.log);