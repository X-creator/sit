import assert from "assert";
import { describe, it } from "node:test";
import { myIndexOf } from "../custom-methods.ts";

describe("myIndexOf", () => {
  it("should return the index of the first occurrence of the element", () => {
    const arr = [1, 2, 3, 4, 2];
    const item = 2;
    assert.deepStrictEqual(myIndexOf(arr, item), arr.indexOf(item));
  });

  it("should return -1 if the element is not found", () => {
    const arr = [1, 2, 3, 4, 5];
    const item = 6;
    assert.deepStrictEqual(myIndexOf(arr, item), arr.indexOf(item));
  });

  it("should handle searching for `undefined` in arrays with empty slots", () => {
    const arr = [1, , 3]; // sparse array
    const item = undefined;
    assert.deepStrictEqual(myIndexOf(arr, item), arr.indexOf(item));
  });

  it("should return the index of the first occurrence when the array contains duplicate elements", () => {
    const arr = [5, 6, 7, 8, 7];
    const item = 7;
    assert.deepStrictEqual(myIndexOf(arr, item), arr.indexOf(item));
  });

  it("should return -1 when the array is empty", () => {
    const arr = [];
    const item = 1;
    assert.deepStrictEqual(myIndexOf(arr, item), arr.indexOf(item));
  });

  it("should start searching from the specified fromIndex", () => {
    const arr = [1, 2, 3, 4, 2];
    const item = 2;
    const fromIndex = 2;
    assert.deepStrictEqual(myIndexOf(arr, item, fromIndex), arr.indexOf(item, fromIndex));
  });

  it("should handle negative fromIndex correctly", () => {
    const arr = [1, 2, 3, 4, 2];
    const item = 2;
    const fromIndex = -2;
    assert.deepStrictEqual(myIndexOf(arr, item, fromIndex), arr.indexOf(item, fromIndex));
  });

  it("should return -1 if fromIndex is out of bounds (positive)", () => {
    const arr = [1, 2, 3, 4, 5];
    const item = 3;
    const fromIndex = 10;
    assert.deepStrictEqual(myIndexOf(arr, item, fromIndex), arr.indexOf(item, fromIndex));
  });

  it("should search the entire array if fromIndex is negative and out of bounds", () => {
    const arr = [1, 2, 3, 4, 5];
    const item = 3;
    const fromIndex = -10;
    assert.deepStrictEqual(myIndexOf(arr, item, fromIndex), arr.indexOf(item, fromIndex));
  });

  it("should distinguish between different types when searching for an element", () => {
    const arr = [1, "1", true];
    assert.strictEqual(myIndexOf(arr, 1), 0);
    assert.strictEqual(myIndexOf(arr, "1"), 1);
  });

  it("should work with `NaN` using strict equality (not found)", () => {
    const arr = [NaN, 1, 2];
    assert.strictEqual(myIndexOf(arr, NaN), -1);
  });

  it("should work with arrays containing objects and return the index of a matching object reference", () => {
    const obj1 = { id: 1 };
    const obj2 = { id: 2 };
    const arr = [obj1, obj2];
    assert.strictEqual(myIndexOf(arr, obj1), 0);
    assert.strictEqual(myIndexOf(arr, { id: 1 }), -1);
  });
});
