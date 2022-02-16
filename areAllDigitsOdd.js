// Write a recursive function to determine whether all digits of the number are odd or not.

function areAllDigitsOdd(num) {
  let digit = (num - (num % 10)) / 10;
  if (num < 10) {
    return num % 2 !== 0;
  }
  if (num % 2 === 0) {
    return false;
  }
  return areAllDigitsOdd(digit);
}
console.log(areAllDigitsOdd(7791));
console.log(areAllDigitsOdd(4211133));
console.log(areAllDigitsOdd(5));
