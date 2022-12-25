// Write a function called sumRange.
// It will take a number and return the sum of all numbers from 1 upto the number passed in.

const sumRange = (num) => {
    if (num === 1) return num;
    return num + sumRange(num-1);
}

console.log(sumRange(3));