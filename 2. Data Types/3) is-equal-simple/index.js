function isEqual(a, b) {
    if (!a || !b || typeof a !== "object" || typeof b !== "object") {
        return false;
    }
    let obj1Keys = Object.keys(a);
    let obj2Keys = Object.keys(b);
    if (obj1Keys.length !== obj2Keys.length) {
        return false;
    }
    return obj1Keys.every(i => obj2Keys.includes(i) && a[i] === b[i]);
}

window.isEqual = isEqual;
export default isEqual;
