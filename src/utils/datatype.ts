export function isArrayFn(param: any) {
    if (!param) {
        return false;
    }
    if (typeof Array.isArray === 'function') {
        return Array.isArray(param);
    }
    else {
        return Object.prototype.toString.call(param) === "[object Array]";
    }
}