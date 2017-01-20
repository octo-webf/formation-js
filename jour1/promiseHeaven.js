var functionWithPromise1 = function (success, error) {
  return new Promise(function (resolve, reject) {
    if (success) {
      resolve(success);
    } else {
      reject(error)
    }
  });
};

var functionWithPromise2 = function (result) {
  return new Promise(function (resolve, reject) {
    if (result) {
      resolve(result + 5);
    } else {
      reject('false');
    }
  });
};

var functionWithPromise3 = function (result) {
  return new Promise(function (resolve, reject) {
    if (result) {
      resolve(result + 15);
    } else {
      reject('almost there');
    }
  });
};

var handleError = function (err) {
  console.error(err);
};

functionWithPromise1('success', 'error')
  .then(functionWithPromise2)
  .then(functionWithPromise3)
  .catch(handleError);

