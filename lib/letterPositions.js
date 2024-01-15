
// letter Positions Function

// need to take a string as arg,//
// loop through each index in string and

//return object with format { letter: [1,2,3]}; etc... as in letter key and

const letterPositions = function(sentance) {

  const results = {};

  // loops through each letter in new string
  for (let i = 0; i < sentance.length; i++) {
    
    const letter = sentance[i];

    if (letter !== " ") {
      if (!results[letter]) {

        results[letter] = [i];

      } else {

        results[letter].push(i);
      
      }

    }
    
  }


  return results;

};


module.exports = letterPositions;
