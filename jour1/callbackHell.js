try {
  functionWithCallback1( function(err, result1) {
    if (err) {
      throw err;
    }
    functionWithCallback2(result1, function(err, result2) {
      if (err) {
        throw err;
      }
      functionWithCallback3(result2, function(err, result3) {
        if (err) {
          throw err;
        }
        functionWithCallback4(result3, function(err, result4) {
          if (err) {
            throw err;
          }
          console.log('Exemple avec les callback : ' + result4);
        });
      });
    });
  });
} catch (err) {
  console.error(err);
}
