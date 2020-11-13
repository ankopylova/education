function isEqual(a, b) {
    if (a!==null&&b!==null&&a!==undefined&&b!==undefined){
        let str,
            str1;
  for (let key in a) {
   str += key + JSON.stringify(a);
  }
  for (let key1 in b) {
   str1 += key1 + JSON.stringify(b);
  }
 return (str === str1)
    }
  else return a === b;
}
window.isEqual = isEqual;
export default isEqual;
