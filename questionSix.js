// Write a function called contains that searches for a value in a nested object.
// It returns true if the object contains that value.

const contains = (nestedObject, value) => {
    for (let prop in nestedObject) {
        if (Object.prototype.hasOwnProperty.call(nestedObject, prop)) {
            if (nestedObject[prop] === value) return true;
            if (typeof nestedObject[prop] === 'object') return contains(nestedObject[prop], value);
        }
    }
    return false;
}

export { contains };