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
