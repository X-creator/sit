export function myFilter<T>(arr: T[], cb: (element: T, index: number, arr: T[]) => boolean): T[] {
  const result: T[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (!arr.hasOwnProperty(i)) continue; // for sparse arrays
    if (cb(arr[i], i, arr)) result.push(arr[i]);
  }

  return result;
}
