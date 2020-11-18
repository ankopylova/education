function asyncSum(a, b) {
return new Promise((resolve, reject) => {
if (typeof a === 'number' && typeof  b === 'number'){
    setTimeout(() => resolve(a + b), 1)
}
    setTimeout(() => reject(new Error('error')), 1)
})
}
window.asyncSum = asyncSum;
export default asyncSum;
