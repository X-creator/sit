import type { Operator, PipeOperators, PipeOperatorsOutput } from "./types.d.ts";

export const pipe =
  <Input, Operators extends Operator[]>(...operators: PipeOperators<Operators, Input>) =>
    (input: Input): PipeOperatorsOutput<Operators> =>
      operators.reduce((result, next) => next(result), input);

export const calcSumOfNumberFields = (obj: Record<string, unknown>) =>
  Object.values(obj).reduce<number>((acc, val) => (typeof val === "number" ? acc + val : acc), 0);

export const getEntriesWithNumberValues = (obj: Record<string, unknown>) =>
  Object.entries(obj).filter((entry) => typeof entry[1] === "number");

export const sortEntriesDesc = (entries: [string, number][]) => entries.sort((a, b) => b[1] - a[1]);

export const extractKeysFromEntries = (entries: [string, number][]) => entries.map((entry) => entry[0]);
