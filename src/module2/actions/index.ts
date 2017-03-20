import { get, post } from '../../utils/http';

export const SIGN_ON = 'SIGN_ON';
export const SIGN_UP = 'SIGN_UP';
let action: any = {};
// 登录
export const signon = (params: any = {}) => {
    // action.type = SIGN_ON;
    let url = '/v1/signon';
    let options: any = {};
    options.headers = {};
    options.data = params;
    return post(url, options);
    // return post(url, options).then(
    //     (res: any) => {
    //         action.payload = res.data;
    //         return action;
    //     },
    //     (err) => {
    //         console.log('err-->', err);
    //     });
}
// 注册
export const signup = (params: any = {}) => {
    let url = '/v1/signup';
    let options: any = {};
    options.headers = {};
    options.data = params;
    return post(url, options);
}