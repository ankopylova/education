function fullSum(...args) {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
        if (arguments[i] === undefined || arguments[i] === true || arguments[i] === false) throw new Error('Wrong arguments type!')
    }
    if (typeof result !== 'number') throw new Error('Wrong arguments type!');
    return result;
}
window.fullSum = fullSum;
export default fullSum;