// 1. Write an arrow function that will take 3 parameters, will multiply
// the parameters and will return the result.

// Array Functions

const number = (num1, num2, num3) => {
  const output = num1 * num2 * num3;
  return output;
};
const numbers = number(12, 13, 14);
console.log(numbers);

// 2. Write the following sentence in three lines and print the result:
// I am a web developer. I love to code. I love to eat biryani.

const name1 = "I am a web developer.";
const name2 = "I love to code.";
const name3 = "I love to eat biryani.";

const nameResult = `${name1} ${name2} ${name3}`;
console.log(nameResult);

// 3. Write an arrow function that will take 2 parameters: One parameter
// will come from you and the other parameter will be a default
// parameter. Add these two parameters and return the result.

//  Write an Arrow Function Decliar

const number1 = (num1, num2 = 10) => {
  const output = num1 * num2;
  return output;
};
const number3 = number1(12);
console.log(number3);
