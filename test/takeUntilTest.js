const takeUntil = require("../lib/takeUntil");
/////// test code //////
console.log(takeUntil([1,2,3,4,5,6], x => x === 3));