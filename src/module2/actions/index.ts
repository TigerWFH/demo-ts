export const SIGN_ON = 'SIGN_ON';
export const SIGN_UP = 'SIGN_UP';

export const signon = () => {
    let url = '/v1/signon';
    let data: any = null;
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('post', url);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 || xhr.status < 300) {
                    resolve(xhr.responseText);
                }
                else {
                    let error: any = new Error(xhr.statusText);
                    error.response = xhr;
                    reject(error)
                }
            }
        };
        if (data) {
            data = JSON.stringify(data);
        }
        xhr.send(data);
    });
}
export const signup = () => {
    let url = '/v1/signup';
    let data: any = null;
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('post', url);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 || xhr.status < 300) {
                    resolve(xhr.responseText);
                }
                else {
                    let error: any = new Error(xhr.statusText);
                    error.response = xhr;
                    reject(error)
                }
            }
        };
        if (data) {
            data = JSON.stringify(data);
        }
        xhr.send(data);
    });
}