function adderPromise(a,b){
  return new Promise(function (resolve,reject){
    if (typeof a === 'number' && typeof b === 'number'){
      resolve(a+b);
    }
    else {
      reject('A and B must be numbers');
    }
  });
}

adderPromise(2,3).then(function(sum){
  console.log('Success: ', sum);
}, function(err){
  console.log('Failed: ',error);
});


function MinusPromise(a,b){
  return new Promise(function (resolve,reject){
    if(typeof a === 'number' && typeof b === 'number' && a < b){
      resolve(b-a);
    }
    else {
      reject('A and B both must be numbers and B must be greater than A.');
    }
  });
}

MinusPromise(10,20).then(function(result){
  console.log('Thanks for entering the correct numbers. Result is :',result);
},function(err){
  console.log('Ooops. ',err);
});
