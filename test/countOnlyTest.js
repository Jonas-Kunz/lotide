const countOnly = require("../lib/countOnly");
/////// test code //////
const words = ["Hello","GoodBye","Hello"];
console.log(countOnly(words, {"Hello": true, "GoodBye": false}));
