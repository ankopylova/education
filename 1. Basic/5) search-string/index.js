function searchString(obj) {
    let str = ""
    for (var key in obj) {
        const value = obj[key]
        if (value !== undefined && value !== null && value !== '') {
            str += (str.length ? "&" : "?") + key + "=" + value;
        }
    }
    return str
}

window.searchString = searchString;
export default searchString;
