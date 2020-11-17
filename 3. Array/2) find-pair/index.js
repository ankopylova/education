function findPair(arr) {
    arr.sort();
    return arr.find( function check(val, i, arr){
    if (arr[i] === arr[i + 1] ) return val;
    }) || null;
}

window.findPair = findPair;
export default findPair;
