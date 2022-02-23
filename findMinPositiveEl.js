/* Given an array of numbers. Write a recursive function to find its minimal positive
element. (if such element does not exist, return -1). */

function findMinPositiveEl(arr, min = Infinity) {
  let newArr = [...arr];
  let minPosEl = min;
  if (newArr.length === 0) {
    return minPosEl === Infinity ? -1 : minPosEl;
  }
  let lastEl = newArr.pop();
  if (lastEl < min && lastEl >= 0) {
    minPosEl = lastEl;
  }
  return findMinPositiveEl(newArr, minPosEl);
}
console.log(findMinPositiveEl([8, 2, -9, 4, 8, 9, -9]));
