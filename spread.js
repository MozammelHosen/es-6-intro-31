const max = Math.max(12, 14, 145, 165, 16, 165, 1554, 5655);
console.log(max);
const maxArray = [12, 13, 145, 15, 15, 215, 14, 250, 140, 1424];
console.log(maxArray);
const maxNumber = Math.max(...maxArray)
console.log(maxNumber);


const numbers = [...maxArray];
numbers.push(465);
console.log(numbers);

const number = [3663,43,34,44,443,...maxArray,364,643,473,347,43747,478347];
console.log(number);