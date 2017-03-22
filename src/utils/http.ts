import { isArrayFn } from './datatype';

function ajax(method: string, url: string, headers: any = null, data: any = null) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        if (headers) {
            for (let key in headers) {
                xhr.setRequestHeader(key, headers[key]);
            }
        }
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300) {
                    return resolve(xhr.responseText);
                }
                else {
                    return reject(xhr.responseText);
                }
            }
        };
        if (data) {
            data = JSON.stringify(data);
        }
        xhr.send(data);
    });
}
//res={msgCode,msgText,[data]}
function parseResult(res: any) {
    let o = {};
    try {
        o = JSON.parse(res);
        return Promise.resolve(o);
    }
    catch (e) {

    }
}
function catchError(err: any) {
    let o = {};
    try {
        o = JSON.parse(err);
        return Promise.reject(o);
    }
    catch (e) {

    }
}
function get(url: string, options: any = {}) {
    let headers = options.headers;
    return ajax('get', url, headers).then(parseResult, catchError);
}
function post(url: string, options: any = {}) {
    let headers = options.headers;
    let data = options.data;
    return ajax('post', url, headers, data).then(parseResult, catchError);
}

export { get, post };