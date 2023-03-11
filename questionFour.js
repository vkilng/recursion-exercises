// Write a function called all which accepts an array and a callback and
// returns true if every value in the array returns true when passed as parameter to the callback function.

const all = (arr,callback) => {
    if (arr.length === 0) return true;
    if (callback(arr[arr.length-1]) ===  false) return false
    else return true && all(arr.slice(0,arr.length-1),callback);
}

export { all };

// console.log(all([1,0,9], (num) => {return num<7} ));