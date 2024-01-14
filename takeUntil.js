
///
// take in two arg
//the array to work with
// the callback which tells me when
// take until should keep slicing items until the callback returns truthy
// so like arrIn = [1,2,3,4,5] => takeuntil(arr, callback(x = 3)) => arrOut = [1,2,3]
//that is i want to take an array and only retrieve values up UNTIL the specified value.

// takeUntil:
const takeUntil = function(array, callback) {

  const arrOut = [];

  for (let element of array) {

    if (callback(element)) {

      break;

    }

    arrOut.push(element);

  }

  return arrOut;

};

module.exports = takeUntil;
