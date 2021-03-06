function isEqualAdvances(a, b) {
    if (a === b) return true;
    if (!a || !b || typeof a !== 'object' || typeof b !== 'object') return a === b;
    if (a === undefined || b === undefined || a === null || b === null)
        return a === b
    if (Object.keys(a).length !== Object.keys(b).length) return false;
    return Object.keys(a).every(k => isEqualAdvances(a[k], b[k])) && Object.keys(a).every(i => Object.keys(b).includes(i));
}

window.isEqualAdvances = isEqualAdvances;
export default isEqualAdvances;
