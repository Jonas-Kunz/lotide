
// take in "source" array and an "itemsToRemove" array
// should return a new array with only those items from source
// that are not present in itemsToRemove array

// so i need to loop through source and pop any not in items to remove and return pop array?

const without = function(source, itemsToRemove) {
  // array to store pushed values
  let  popArr = [];
  // loops through all items in source
  for (const item of source) {
    // include checks if each item in source is in itemsToRemove
    if (!itemsToRemove.includes(item)) {
      // pushes item to array if NOT in itemsToRemove
      popArr.push(item);
    }
    
  }
  //return
  return popArr;

};

module.exports = without;