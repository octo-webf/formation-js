function makeAddition(x) {
  return function(y) {
    return x + y;
  };
}

var addFiveTo = makeAddition(5);
var addTenTo = makeAddition(10);

console.log(addFiveTo(5)); // 10
console.log(addTenTo(32)); // 42
