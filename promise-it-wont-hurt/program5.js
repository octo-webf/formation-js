require('es6-promise');

'use strict';

let promise = new Promise(function (fulfill, reject){
	fulfill('PROMISE VALUE');
});


promise.then(console.log);

console.log('MAIN PROGRAM');