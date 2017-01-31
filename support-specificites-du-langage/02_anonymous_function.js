console.log('https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout');

var DELAY_IN_MS = 3000;

// step 1 : anonymous function

setTimeout(function () {
  console.log('WE ARE INSIDE THE ANONYMOUS FUNCTION SET TIMEOUT!');
}, DELAY_IN_MS);


// step 2 : named function

function saySomething() {
  console.log('WE ARE INSIDE THE NAMED FUNCTION SET TIMEOUT!');
}

var ANOTHER_DELAY_IN_MS = 6000;
setTimeout(saySomething, ANOTHER_DELAY_IN_MS);

