function asyncSum(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
       return new Promise(function(resolve) {
            setTimeout(() => resolve(a+b), 1);
        });
    }
    return new Promise(function(resolve, reject) {
        setTimeout(() => reject(new Error("error")), 1);
    });
}

window.asyncSum = asyncSum;
export default asyncSum;
