require('es6-promise');

'use strict';


function attachTitle (argument) {
    return 'DR. ' + argument;
}

let promise = Promise.resolve('MANHATTAN');

promise.then(attachTitle).then(console.log);



