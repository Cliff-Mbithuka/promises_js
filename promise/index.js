let promise = new Promise(function(resolve, reject) {
    resolve(1);
  
    setTimeout(() => resolve(2), 1000);
  });
  
  promise.then(alert);

  //the output is 1 and will ignore the setTimeout because the first resolve is taken into account