const eqObjects = require("../lib/eqObjects");
/////// test code //////
console.log(eqObjects({1: "1", 2: "3"},{1: "1", 2: "3"} ));
console.log(eqObjects({1: "1", 2: "3"},{1: "1", 2: "4"} ));