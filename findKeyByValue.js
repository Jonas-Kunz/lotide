
// function findKeyByValue
const findKeyByValue = function(objectIn, valueIn) {
  // loops through keys in objectIn
  for (let key in objectIn) {
    //checks if key matches valueIn result
    if (objectIn[key] === valueIn) {
      //console.log("Key:" + key)
      return key;
    }

  }

  return undefined;
  
};

module.exports = findKeyByValue;

