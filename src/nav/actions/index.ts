import { get, post } from '../../utils/http';
import { getCachedToken } from '../../utils/usertoken';

export const SIGN_ON = 'SIGN_ON';
export const SIGN_UP = 'SIGN_UP';
// 登录
export let signon = (params: any = {}) => {
    let action: any = {
        type: SIGN_ON,
        status: 'begin',
        payload: {}
    };
    let url = '/v1/signon/';
    let options = {
        headers: {
            'Content-Type': 'application/json'
        },
        data: params
    };
    return (dispatch: Function) =>
        post(url, options).then(
            (res: any) => {
                action.payload = res.data;
                action.status = 'success';
                dispatch(action);
            },
            (err: any) => {
                action.payload = err;
                action.status = 'error';
                dispatch(action);
            }
        );
}
// 注册
export let signup = (params: any = {}) => {
    let action: any = {
        type: SIGN_UP,
        payload: 'signup'
    };
    let url = '/v1/signup/';
    let options = {
        headers: {
            'Content-Type': 'application/json'
        },
        data: params
    };
    post(url, options).then(
        (res: any) => {
            action.payload = res.data;
        },
        (err: any) => {
            action.payload = err;
        }
    );
    return action;
}