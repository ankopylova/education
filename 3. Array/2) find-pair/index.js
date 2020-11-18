function findPair(arr) {
    return arr.sort().find((val, i, arr) => arr[i] === arr[i + 1]) || null;
}

window.findPair = findPair;
export default findPair;
