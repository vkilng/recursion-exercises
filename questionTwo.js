// Write a function called power which takes in a base and an exponent.
// If the exponent is 0, return 1.

const power = (base,exponent) => {
    if (base === 0) return 0;
    if (exponent === 0) return 1;
    return base * power(base,exponent-1);
}

export { power };