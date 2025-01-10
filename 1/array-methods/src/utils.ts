function convertToInt(n: unknown) {
  const truncated = Math.trunc(+n);
  return Number.isNaN(truncated) || truncated === -0 ? 0 : truncated;
}

export function convertToIndex(n: unknown, length: number) {
  const integer = convertToInt(n);
  return integer < 0 ? Math.max(integer + length, 0) : Math.min(integer, length);
}

export function sameValueZero(x: unknown, y: unknown) {
  if (typeof x === "number" && typeof y === "number") {
    return x === y || (x !== x && y !== y);
  }
  return x === y;
}
