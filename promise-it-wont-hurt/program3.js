require('es6-promise');

'use strict';

let promise = new Promise(function (fulfill, reject){
	setTimeout(function(){
		reject(new Error('REJECTED!'));
	}, 300);
});

function onReject (error) {
    console.log(error.message);
}

promise.then(console.log, onReject);
