function sumCheck(a, b) {
        if (typeof a === 'number' && typeof b === 'number') return a+b;
        else throw new Error('Wrong arguments type!');
}

window.sumCheck = sumCheck;
export default sumCheck;
