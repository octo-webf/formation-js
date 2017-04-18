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
function f13(a, b, c) {
  console.log("args function : ", a,b,c);
}

f13(a[0], a[1], a[2]);
f13(...a);

//1.4 infinite args
function f14(...args) {
 console.log("infinite args : ", args);
}
f14(1,2,3,4);

//2 - Named parameters
const o = {
  a : "a",
  b : "b",
  c : "c"
};
function f21(arg) { // es5 no named params
  console.log("es5 named params : ", arg.a, arg.b);
}
f21(o);

function f22({a, b}) { // es2015 named params
  console.log("es2015 named params : ", a, b);
}
f22(o);

//3 - String interpolation
const variable = "test";
console.log("log variable :" + variable);
console.log(`interpolate variable : ${variable}`);