// Write a function that sums squares of numbers in list that may contain more lists

const sumOfSquares = (arr) => {
    let sum = 0;
    arr.forEach(element => {
        if (Number.isInteger(element)) sum += element**2;
        else sum += sumOfSquares(element);
    });
    return sum;
}

export { sumOfSquares };