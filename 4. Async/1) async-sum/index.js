function asyncSum(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') resolve(a + b);
            reject(new Error('error'));
        }, 1);
    });
}

window.asyncSum = asyncSum;
export default asyncSum;
