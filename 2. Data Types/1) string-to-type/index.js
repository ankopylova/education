function stringToType(str) {
  switch (str){
    case "true":
      return true;
    case "false":
      return false;
    case "null":
      return null;
    case "undefined":
      return undefined
    default:
      if (/^\d+$/.test(str)) return Number.parseInt(str);
  }
  return str;
}

window.stringToType = stringToType;
export default stringToType;
