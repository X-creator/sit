export type Operator = (input: any) => any;

type LastOperator<Operators> = Operators extends [...unknown[], infer Last extends Operator]
  ? Last
  : never;

export type PipeOperatorsOutput<Operators extends Operator[]> = ReturnType<LastOperator<Operators>>;

export type PipeOperators<Operators extends Operator[], Input> = Operators extends [
    infer First extends Operator,
    ...infer Rest extends Operator[],
  ]
  ? [(input: Input) => ReturnType<First>, ...PipeOperators<Rest, ReturnType<First>>]
  : Operators;
