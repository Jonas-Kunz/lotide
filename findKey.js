
const findKey = function(object, callback) {
  
  let keyOut;

  for (let key in object) {

    if (callback(object[key]/* is x */)) {
      keyOut = key;
      break;
    }
     
  }

  return keyOut;

};

module.exports = findKey;