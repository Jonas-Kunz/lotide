const findKey = require("/home/labber/lotide/findKey");
/////// test code //////
console.log(findKey({1: "1", 2: "3"}, x => x === "1"));
console.log(findKey({1: "1", 2: "3"}, x => x === "3"));