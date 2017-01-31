require('es6-promise');

'use strict';

let promise = Promise.resolve('SECRET VALUE');
let promise2 = Promise.reject(new Error('SECRET VALUE'));

function onReject (error) {
    console.log(error.message);
}

promise.then(console.log).catch(onReject);
promise2.then(console.log).catch(onReject);

