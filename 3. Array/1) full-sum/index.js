function fullSum(...args) {
    return args.reduce(function(result, num) {
        if (typeof num !== 'number') throw new Error('Wrong arguments type!')
        return result + num;
    }, 0);
}
window.fullSum = fullSum;
export default fullSum;