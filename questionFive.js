// Write a function called productOfArray which takes in an array of numbers and returns the product of them all

const productOfArray = (arr) => {
    if (arr.length === 0) return 1;
    return arr[arr.length-1] * productOfArray(arr.splice(0,arr.length-1));
}

export { productOfArray };