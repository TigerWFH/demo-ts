import { get, post } from '../../utils/http';
import { getCachedToken } from '../../utils/usertoken';

export const SIGN_ON = 'SIGN_ON';
export const SIGN_UP = 'SIGN_UP';
export const SIGN_OUT = 'SIGN_OUT';
// 登录
export let signon = (params: any = {}) => {
    let action: any = {
        type: SIGN_ON,
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
        status: 'begin',
        payload: 'signup'
    };
    let url = '/v1/signup/';
    let options = {
        headers: {
            'Content-Type': 'application/json'
        },
        data: params
    };
    return (dispatch: Function) => {
        dispatch(action);
        post(url, options).then(
            (res: any) => {
                action.status = 'success';
                action.payload = res.data;
                console.log('res--->', res);
                dispatch(action);
            },
            (err: any) => {
                action.status = 'error';
                action.payload = err;
                console.log('err--->', err);
                dispatch(action);
            }
        );
    }
}

// 退出
export let signout = () => {
    let action: any = {
        type: SIGN_OUT,
        payload: {
            isSignon: false
        }
    };

    return action;
}