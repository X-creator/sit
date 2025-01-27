import {
  calcSumOfNumberFields,
  extractKeysFromEntries,
  getEntriesWithNumberValues,
  pipe,
  sortEntriesDesc
} from "./utils.ts";

const obj = { name: "Vasya", friends: 5, likes: 19, projects: 7 };

const sumOfNumberFields = pipe(calcSumOfNumberFields)(obj); //  or just calcSumOfNumberFields(obj);

console.log(sumOfNumberFields);

const numberFields = pipe(
  getEntriesWithNumberValues, //
  sortEntriesDesc, //
  extractKeysFromEntries //
)(obj);

console.log(numberFields);

// type safety, if uncomment it will throw error
// const test = pipe(
//   calcSumOfNumberFields, //
//   sortEntriesDesc,
// )(obj);
