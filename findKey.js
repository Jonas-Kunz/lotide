/////////////
//test BOIS
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢Assertion Passed: ${actual} === ${expected} `);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

/////////////

const findKey = function(object, callback) {
  
  let keyOut = "";

  for (let key in object) {

    if (!callback(object[key]/* is x */)) {
      
      continue;

    } else {

      keyOut += key;
      break;

    }

  }

  return keyOut;

};

/////test
const testObject = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};



assertEqual((findKey(testObject, x => x.stars === 2)), "noma"); // => "noma" =>pass
assertEqual((findKey(testObject, x => x.stars === 1)), "Blue Hill"); // => "Blue Hill" =>pass
assertEqual((findKey(testObject, x => x.stars === 0)), ""); // => "" => pass