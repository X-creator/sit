import assert from "assert";
import { describe, it } from "node:test";
import { mySlice } from "../custom-methods.ts";

describe("mySlice", () => {
  it("should return a shallow copy of the entire array when no arguments are provided", () => {
    const arr = [1, 2, 3, 4, 5];
    assert.deepStrictEqual(mySlice(arr), arr.slice());
  });

  it("should return a slice of the array from the specified start index", () => {
    const arr = [1, 2, 3, 4, 5];
    const start = 2;
    assert.deepStrictEqual(mySlice(arr, start), arr.slice(start));
  });

  it("should return an empty array if start index is out of bounds", () => {
    const arr = [1, 2, 3];
    const start = 10;
    assert.deepStrictEqual(mySlice(arr, start), arr.slice(start));
  });

  it("should return a slice of the array between start and end indices (exclusive)", () => {
    const arr = [1, 2, 3, 4, 5];
    const start = 1;
    const end = 4;
    assert.deepStrictEqual(mySlice(arr, start, end), arr.slice(start, end));
  });

  it("should handle negative start index correctly", () => {
    const arr = [1, 2, 3, 4, 5];
    const start = -3;
    assert.deepStrictEqual(mySlice(arr, start), arr.slice(start));
  });

  it("should handle negative end index correctly", () => {
    const arr = [1, 2, 3, 4, 5];
    const start = 1;
    const end = -1;
    assert.deepStrictEqual(mySlice(arr, start, end), arr.slice(start, end));
  });

  it("should return an empty array when start index is greater than or equal to end index", () => {
    const arr = [1, 2, 3, 4, 5];
    const start = 3;
    const end = 2;
    assert.deepStrictEqual(mySlice(arr, start, end), arr.slice(start, end));
  });

  it("should return an empty array for negative start and end indices resulting in no overlap", () => {
    const arr = [1, 2, 3, 4, 5];
    const start = -1;
    const end = -4;
    assert.deepStrictEqual(mySlice(arr, start, end), arr.slice(start, end));
  });

  it("should return the correct slice for mixed positive and negative indices", () => {
    const arr = [1, 2, 3, 4, 5];
    const start = -4;
    const end = 4;
    assert.deepStrictEqual(mySlice(arr, start, end), arr.slice(start, end));
  });

  it("should not modify the original array", () => {
    const arr = [1, 2, 3, 4, 5];
    const originalArray = [...arr];
    mySlice(arr, 1, 3);
    assert.deepStrictEqual(arr, originalArray);
  });

  it("should work with empty arrays", () => {
    const arr = [];
    const start = 0;
    const end = 3;
    assert.deepStrictEqual(mySlice(arr, start, end), arr.slice(start, end));
  });

  it("should work with sparse arrays", () => {
    const arr = [1, , 3]; // sparse array
    assert.deepStrictEqual(mySlice(arr), arr.slice());
  });

  it("should handle non-integer arguments gracefully", () => {
    const arr = [1, 2, 3, 4, 5];
    const start = 1.5;
    const end = 4.5;
    assert.deepStrictEqual(mySlice(arr, start, end), arr.slice(start, end));
  });
});
