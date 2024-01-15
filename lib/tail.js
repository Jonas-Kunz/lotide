
// returns all elemnets but the first:
const tail = function(arr) {
  if (arr.length < 2) {
    return []
  }
  return arr.slice(1);
};

module.exports = tail;
