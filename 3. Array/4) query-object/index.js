function queryToObject(query) {
   let obj = {};
   if (query !== "" && query !== "?") {
      obj = JSON.parse('{"' + query.split("?")[1].replace
      (/&/g, '", "').replace
      (/=/g, '": "') + '"}');
      for (const key in obj) {
         obj[key] = stringToType(obj[key]);
           }
      }
   return obj;
}

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
         if (/^\d+$/.test(str)) return Number.parseInt(str)
         return str;
   }
}

window.queryToObject = queryToObject;
export default queryToObject;
