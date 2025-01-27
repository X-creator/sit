export const capitalize = <T extends string>(str: T) =>
  (str.charAt(0).toUpperCase() + str.slice(1)) as Capitalize<T>;

const punctuation = [" ", ",", ".", "!", "?", ":", ";"];
const ellipsis = "...";

export function truncateString(input: string, maxLength: number) {
  if (input.length <= maxLength) return input;

  let limit = maxLength > 0 ? maxLength : 0;

  while (limit > 0 && !punctuation.includes(input[limit])) {
    limit--;
  }

  return input.slice(0, limit) + ellipsis;
}

export function isSubstring(str1: string, str2: string) {
  const longest = str1.length > str2.length ? str1 : str2;
  const shortest = str1.length < str2.length ? str1 : str2;

  return longest.includes(shortest);
}
