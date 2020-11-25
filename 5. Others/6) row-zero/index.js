function rowZero(str) {
    const z = str.match(/0+/g);
    if (z === null) return 0;
    return z.sort()[z.length - 1].length;
}

window.rowZero = rowZero;
export default rowZero;