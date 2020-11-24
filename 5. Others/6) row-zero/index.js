function rowZero(str) {
    let z = str.match(/0+/g);
    if (z === null) return 0;
    z.sort();
    let n = z[z.length - 1];
    return n.length;
}

window.rowZero = rowZero;
export default rowZero;