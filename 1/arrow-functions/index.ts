import { myFilter } from "./utils.ts";

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = myFilter(numbers, (num) => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

const sparseArr = [1, , undefined];
console.log(myFilter(sparseArr, (x) => x === undefined)); // [undefined]
console.log(myFilter(sparseArr, (x) => x !== 2)); // [1, undefined]
