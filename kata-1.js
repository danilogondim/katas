// a function that takes an array of numbers and returns the sum of the two largest numbers

const sumLargestNumbers = function(data) {
  let max1 = data[0];
  let max2 = data[1];
  for (let num of data) {
    if (num !== max2 && num > max1) {
      if (max2 < max1) {
        max2 = max1;
      }
      max1 = num;
    }
    if (num !== max1 && num > max2) {
      if (max1 > max2) {
        max1 = max2;
      }
      max2 = num;
    }
  }
  return max1 + max2;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));