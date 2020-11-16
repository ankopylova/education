function findPair(arr) {
    const newArr = arr.sort()
    let res;
    for (let i = 0; i < arr.length; i++) {
        if (newArr[i] === newArr[i + 1]) res = newArr[i];
    }
    return res || null;
}

window.findPair = findPair;

export default findPair;
