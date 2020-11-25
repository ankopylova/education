function queryToObject(query) {
    let obj = {};
    if (query !== "" && query !== "?") {
        query.replace('?', '').split("&").forEach((item) => {
            const [key, value] = item.split("=");
            obj[key] = stringToType(value)
        })
    }
    return obj;
}

function stringToType(str) {
    switch (str) {
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
