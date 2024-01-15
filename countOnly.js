
// counOnly function

//definition:
///////takes in array to count and object of items to count in format {"itemTocount": true/false}
const countOnly = function(allItems, itemsToCount) {
  
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
      
    }
    
  }

  return results;
  
};

module.exports = countOnly;
