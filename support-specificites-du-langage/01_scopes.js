var myGlobalVar = "my global variable";


function sayHello() {
  var myLocalVar = "a local variable";
  console.log('#sayHello - myGlobalVar = ' + myGlobalVar);
  console.log('#sayHello - myLocalVar = ' + myLocalVar);
}

sayHello();

console.log('#global - myGlobalVar = ' + myGlobalVar);
console.log('#global - myLocalVar = ' + myLocalVar);
