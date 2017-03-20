import { get, post } from '../../utils/http';
import { getCachedToken } from '../../utils/usertoken';

export const SIGN_ON = 'SIGN_ON';
export const SIGN_UP = 'SIGN_UP';
// 登录
export let signon = (params: any = {}) => {
    let action: any = {
        type: SIGN_ON,
    };
    let url = '';
    let options = {
        headers: {},
        data: params
    };
    // post(url, options).then(
    //     (res: any) => {
    //         action.payload = res.data;
    //     },
    //     (err: any) => {
    //         action.payload = err;
    //     }
    // );
    return action;
}
// 注册
export let signup = (params: any = {}) => {
    let action: any = {
        type: SIGN_UP
    };
    let url = '';
    let options = {
        headers: {},
        data: params
    };
    // post(url, options).then(
    //     (res: any) => {
    //         action.payload = res.data;
    //     },
    //     (err: any) => {
    //         action.payload = err;
    //     }
    // );
    return action;
}