const errorMessage = 'argument must be an array of numbers';

function calcSum(numbers) {
  if (!Array.isArray(numbers)) throw new Error(errorMessage);

  let sum = 0;

  numbers.forEach(num => {
    if (Number(num)!==num) throw new Error(errorMessage);
    sum += num;
  });

  return sum;
}

let usersMostExpensiveProducts = [10000, 20000, 30000];

console.log(calcSum(usersMostExpensiveProducts));
