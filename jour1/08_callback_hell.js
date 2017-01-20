findEntity = function (callback) {
  callback(null, 'response');
};

updateEntity = function (result, callback) {
  callback(null, result);
};

reloadEntity = function (result, callback) {
  callback(null, result);
};

formatResponse = function (result, callback) {
  callback(null, result);
};

try {
  findEntity(function (err, foundEntity) {
    if (err) {
      throw err;
    }
    console.log('Entity found');
    updateEntity(foundEntity, function (err, updatedEntity) {
      if (err) {
        throw err;
      }
      console.log('Entity updated');
      reloadEntity(updatedEntity, function (err, reloadedEntity) {
        if (err) {
          throw err;
        }
        console.log('Entity reloaded');
        formatResponse(reloadedEntity, function (err, response) {
          if (err) {
            throw err;
          }
          console.log('Response formatted');
          console.log('Example with the callbacks : ' + response);
        });
      });
    });
  });
} catch (err) {
  console.error(err);
}
