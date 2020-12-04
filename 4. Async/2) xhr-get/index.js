function xhrGet(url) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send();
    xhr.responseType = "json"
    return new Promise((resolve, reject) => {
        xhr.onload = function () {
            if (xhr.status <= 299) resolve(xhr.response);
            reject(xhr.response);
        }
    });
}

window.xhrGet = xhrGet;
export default xhrGet;
