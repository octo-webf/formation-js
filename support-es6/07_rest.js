//1 - Spread

//1.1 - initialisation
const a = [1, 2, 3];
const b = [4, 5, 6];

//1.2 concaténation
let c = a.concat(b); // es5
console.log("concat es5 : ", c);
c = [...a,...b]; // es2015
console.log("concat es2015 : ", c);

//1.3 spread args function
function f(a, b, c) {
  console.log("args function : ", a,b,c);
}

f(a[0], a[1], a[2]);
f(...a);

//1.4 infinite args
function f(...args) {
 console.log("infinite args : ", args);
}
f(1,2,3,4);

//2 - Named parameters
const o = {
  a : "a",
  b : "b",
  c : "c"
};
function f1(arg) { // es5 no named params
  console.log("es5 named params : ", arg.a, arg.b);
}
f1(o);

function f2({a, b}) { // es2015 named params
  console.log("es2015 named params : ", a, b);
}
f2(o);

//3 - String interpolation
const variable = "test";
console.log("log variable :" + variable);
console.log(`interpolate variable : ${variable}`);