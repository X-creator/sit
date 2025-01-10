import assert from "assert";
import { describe, it } from "node:test";
import { myIncludes } from "../custom-methods.ts";

describe("myIncludes", () => {
  it("should return true if the array includes the element", () => {
    const arr = [1, 2, 3, 4];
    const item = 2;
    assert.strictEqual(myIncludes(arr, item), true);
  });

  it("should return false if the array does not include the element", () => {
    const arr = [1, 2, 3, 4];
    const item = 5;
    assert.strictEqual(myIncludes(arr, item), false);
  });

  it("should handle searching for `undefined` in arrays with empty slots", () => {
    const arr = [1, , 3]; // sparse array
    const item = undefined;
    assert.strictEqual(myIncludes(arr, item), true);
  });

  it("should handle searching for `NaN` and return true if it is present", () => {
    const arr = [NaN, 1, 2];
    assert.strictEqual(myIncludes(arr, NaN), true);
  });

  it("should handle a negative `fromIndex` and search correctly", () => {
    const arr = [1, 2, 3, 4, 2];
    const item = 2;
    const fromIndex = -2;
    assert.deepStrictEqual(myIncludes(arr, item, fromIndex), arr.includes(item, fromIndex));
  });

  it("should return false if the element is not found due to a positive out-of-bounds `fromIndex`", () => {
    const arr = [1, 2, 3, 4];
    const item = 3;
    const fromIndex = 10;
    assert.deepStrictEqual(myIncludes(arr, item, fromIndex), arr.includes(item, fromIndex));
  });

  it("should search the entire array if `fromIndex` is negative and out of bounds", () => {
    const arr = [1, 2, 3, 4];
    const item = 1;
    const fromIndex = -10;
    assert.deepStrictEqual(myIncludes(arr, item, fromIndex), arr.includes(item, fromIndex));
  });

  it("should differentiate between different types when checking for an element", () => {
    const arr = [1, "1", true];
    assert.strictEqual(myIncludes(arr, 1), true);
    assert.strictEqual(myIncludes(arr, "1"), true);
    assert.strictEqual(myIncludes(arr, true), true);
    assert.strictEqual(myIncludes(arr, false), false);
  });

  it("should work with arrays containing objects and return true for a matching object reference", () => {
    const obj1 = { id: 1 };
    const obj2 = { id: 2 };
    const arr = [obj1, obj2];
    assert.strictEqual(myIncludes(arr, obj1), true);
    assert.strictEqual(myIncludes(arr, { id: 1 }), false);
  });

  it("should return true if the element is found at the first index", () => {
    const arr = [1, 2, 3];
    assert.strictEqual(myIncludes(arr, 1), true);
  });

  it("should return true if the element is found at the last index", () => {
    const arr = [1, 2, 3];
    assert.strictEqual(myIncludes(arr, 3), true);
  });

  it("should return false for empty arrays", () => {
    const arr = [];
    assert.strictEqual(myIncludes(arr, 1), false);
  });
});
