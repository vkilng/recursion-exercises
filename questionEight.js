// Write a function that sums squares of numbers in list that may contain more lists

const sumOfSquares = (arr) => {
    let sum = 0;
    arr.forEach(element => {
        if (Number.isInteger(element)) sum += element**2;
        else sum += sumOfSquares(element);
    });
    return sum;
}

let l = [1,2,3]; 
console.log(sumOfSquares(l)); // 1 + 4 + 9 = 14

l = [[1,2],3]; 
console.log(sumOfSquares(l)); // 1 + 4 + 9 = 14

l = [[[[[[[[[1]]]]]]]]] 
console.log(sumOfSquares(l)); // 1 = 1

l = [10,[[10],10],[10]] 
console.log(sumOfSquares(l)); // 100 + 100 + 100 + 100 = 400