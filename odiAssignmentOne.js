// The Fibonacci Sequence, which sums each number with the one before it, is a great example of a problem that can be solved recursively.

const fibsIterate = (num) => {
    let res = [0,1];
    for (let i=0; i<num-2; i++) {
        res.push(res[i]+res[i+1]);
    }
    return res;
}

const fibsRec = (n) => {
    if (n === 2) return [0,1];
    const res = fibsRec(n-1);
    res.push((res[res.length-1] + res[res.length-2]));
    return res;
    //return n <= 1 ? n : fibsRec(n-1) + fibsRec(n-2);
}

console.log(fibsIterate(8));
console.log(fibsRec(8));