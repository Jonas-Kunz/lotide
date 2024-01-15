
// take in an array to be altered as argument
// and a callback as argument to be preformed on  array

const map = function(array, callback) {
  
  const results = [];

  for (let item of array) {

    results.push(callback(item));

  }

  return results;

};

module.exports = map;