function isEqual(a, b) {
    if (typeof a !== "object" || typeof b !== "object") {
        return false;
    }
    if (a === undefined || b === undefined) {
        return false;
    }
    if (a === null || b === null) {
        return false;
    }
    let obj1Keys = Object.keys(a);
    let obj2Keys = Object.keys(b);
    if (obj1Keys.length !== obj2Keys.length) {
        return false;
    }
    for (let i = 0; i < obj1Keys.length; i++) {
        if (!obj2Keys.includes(obj1Keys[i])) {
            return false;
        }
        if (a[obj1Keys[i]] !== b[obj2Keys[i]]){
            return false;
        }
    }
    return true;
}


window.isEqual = isEqual;
export default isEqual;
