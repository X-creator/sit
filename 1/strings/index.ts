import { capitalize, isSubstring, truncateString } from "./utils.ts";

console.log(capitalize("hello"));

console.log(truncateString("Это работает и сейчас", 5));

console.log(isSubstring("подстрока", "строка"));
console.log(isSubstring("строка", "подстрока"));
