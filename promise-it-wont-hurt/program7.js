require('es6-promise');

'use strict';

first().then(function(secret) {
	return second(secret);
}).then(function(secret){
	return console.log(onFulfill(secret));
});


function onFulfill (secret) {
    return secret;
}

