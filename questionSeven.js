// Given a multi-dimensional integer array, return the total number of integers stored inside this array

const totalIntegers = (arr) => {
    let count = 0;
    arr.forEach(element => {
        if (Number.isInteger(element)) count++;
        if (Array.isArray(element)) count += totalIntegers(element);
    });
    return count;
}

console.log(totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]));