const operations = {
  add: (a: number, b: number) => a + b,
  subtract: (a: number, b: number) => a - b,
  multiply: (a: number, b: number) => a * b,
  divide: (a: number, b: number) => a / b
};

export const calculate = (a: number, b: number, operation: keyof typeof operations) =>
  operations[operation](a, b);
