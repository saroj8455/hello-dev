import { message } from './common/common.helper.js';

export function getFormattedDate(date, separator) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return `${day}${separator}${month}${separator}${year}`;
}

// // Example usage:
// const currentDate = new Date();
// const separator = ':'; // You can replace '-' with any separator you want
// const formattedDate = getFormattedDate(currentDate, separator);
// console.log(formattedDate); // Output: Formatted date string with the

export { message, getFormattedDate as _dtformat };

// Created_at: 05/25/24 Reverse words in a given string
// Input: s = “i love programming very much”
// Output: s = “much very programming love i”

function reverseWord(params) {
  let reverseMessage;
  if (typeof params === 'string') {
    reverseMessage = params.split(' ').reverse().join(' ');
    console.log(reverseMessage);
  }
  return reverseMessage;
}

reverseWord('Hello World App');

// Created_at: 05/25/24
function factorial(params) {
  // let factorial = 1;
  // if (typeof params === 'number') {
  //   for (let i = 1; i <= params; i++) {
  //     factorial = factorial * i;
  //   }
  //   console.log(factorial);
  // }
  if (params <= 0) return;
  if (params <= 1) return 1;
  return params * factorial(params - 1);
}

console.log(factorial(3)); // 6

function findFruits(params, keyword) {
  if (Array.isArray(params)) {
    let fruits = params.filter((fruit) => {
      if (typeof fruit == 'string') {
        return fruit.includes(keyword);
      }
    });
    return fruits;
  }
  return;
}
const fruits = ['Banana', 'Apple', 'Orange', 'Pineapple', 'Woodapple'];

console.log(findFruits(fruits, 'ange'));

// Created_at: 05/26/24
// sort an array using compare function
const scores = [1, 10, 3, 5, 0, 98, 23, 99];

console.log(scores.sort((a, b) => b - a)); //
