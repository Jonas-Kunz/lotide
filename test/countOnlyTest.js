const countOnly = require("../countOnly");
/////// test code //////
const words = ["Hello","GoodBye","Hello"];
console.log(countOnly(words, {"Hello": true, "GoodBye": false}));
