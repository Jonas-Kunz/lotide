
// for array with one or two elements return empty array
// for array with odd num of elements return single middle element
// for even array return two middle elements

//checks for middle element(s) of array
const middle = function(array) {
  // makes sure array is more than 2 and returns an empty array if NOT
  if (array.length <= 2) {
    return [];
  }
  //stores my middle elements
  let resultArr = [];
  // checks if array length is odd
  if (array.length % 2 !== 0) {
    // if odd pushes the element at the index array.length/2 rounded down into resultArr
    resultArr.push(array[Math.floor(array.length / 2)]);
  } else {
    // if even does same as above but twice but pushes array.length -1 / 2 first giving the middle two
    resultArr.push(array[Math.floor((array.length - 1) / 2)]);
    resultArr.push(array[Math.floor(array.length / 2)]);
    
  }
  //returns resultArr
  return resultArr;

};

module.exports = middle;