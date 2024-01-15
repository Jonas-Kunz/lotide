
// returns all elemnets but the first:
const tail = function(arr) {
  if (arr.length < 2) {
    return []
  }
  return arr.slice(1);
};
const arr = [1]
console.log(tail(arr));
module.exports = tail;
