import { convertToIndex, sameValueZero } from "./utils.ts";

export function mySlice<T>(arr: T[], start?: number, end?: number) {
  const res: T[] = [];
  const startIdx = convertToIndex(start, arr.length);
  const endIdx = arguments.length < 3 ? arr.length : convertToIndex(end, arr.length);

  for (
    let resIdx = 0, arrIdx = startIdx; //
    arrIdx < endIdx; //
    resIdx++, arrIdx++
  ) {
    if (!arr.hasOwnProperty(arrIdx)) continue; // for sparse arrays
    res[resIdx] = arr[arrIdx];
  }

  return res;
}

export function myIndexOf<T>(arr: T[], item: T, from?: number) {
  let res = -1;
  const startIdx = convertToIndex(from, arr.length);

  for (let i = startIdx; i < arr.length; i++) {
    if (arr[i] === item && arr.hasOwnProperty(i)) {
      res = i;
      break;
    }
  }

  return res;
}

export function myIncludes<T>(arr: T[], item: T, from?: number) {
  let res = false;
  const startIdx = convertToIndex(from, arr.length);

  for (let i = startIdx; i < arr.length; i++) {
    if (sameValueZero(arr[i], item)) {
      res = true;
      break;
    }
  }

  return res;
}
