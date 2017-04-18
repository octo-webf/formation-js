var findEntity = function (success, error) {
  return new Promise(function (resolve, reject) {
    if (success) {
      resolve(success);
      } else {
      reject(error)
      }
    });
};

var updateEntity = function (foundEntity) {
  return new Promise(function (resolve, reject) {
    if (foundEntity) {
      resolve(foundEntity);
    } else {
      reject('false');
    }
  });
};

var reloadEntity = function (updatedEntity) {
  return new Promise(function (resolve, reject) {
    if (updatedEntity) {
      resolve(updatedEntity);
    } else {
      reject('try again');
    }
  });
};

var formatResponse = function (reloadedEntity) {
  return new Promise(function (resolve, reject) {
    if (reloadedEntity) {
      resolve(reloadedEntity);
    } else {
      reject('almost there');
    }
  });
};

var handleError = function (err) {
  console.error(err);
};

findEntity('response', 'error')
  .then(updateEntity)
  .then(reloadEntity)
  .then(formatResponse)
  .then(console.log)
  .catch(handleError);

