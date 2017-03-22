let initialState = {
    isBeginAjax: false,//是否加载mask
    isSignon: false,//判断用户是否登录成功
    userName: '',
    userAvartar: '',
    isSignup: false,//判断用户是否注册成功
    error: ''//用于判断是否发生了error
};
// 此处处理UI逻辑
function handleActions(state = initialState, action: any = {}) {
    let ret: any = {};
    switch (action.type) {
        case 'SIGN_ON':
            if (action.status === 'begin') {
                ret = Object.assign({},
                    state,
                    {
                        isBeginAjax: true,
                        // isSignon: false,
                        // token: action.payload.token || '',
                        // userName: action.payload.userName || 'default',
                        // userAvartar: action.payload.userAvartar || './images/test.jpg',
                        // isSignup: false,
                        // error: ''
                    });
            }
            else if (action.status === 'success') {
                ret = Object.assign({},
                    state,
                    {
                        isBeginAjax: false,
                        isSignon: true,
                        token: action.payload.token,
                        userName: action.payload.userName || 'default',
                        userAvartar: action.payload.userAvartar || './images/test.jpg',
                        // isSignup: false,
                        // error: ''
                    });
            }
            else if (action.status === 'error') {
                ret = Object.assign({},
                    state,
                    {
                        isBeginAjax: false,
                        isSignon: false,
                        // token: '',
                        // userName: action.payload.userName || 'default',
                        // userAvartar: action.payload.userAvartar || './images/test.jpg',
                        // isSignup: true,
                        error: action.payload
                    });
            }
            return ret;
        case 'SIGN_UP':
            if (action.status === 'begin') {
                ret = Object.assign(
                    {},
                    state,
                    {
                        isBeginAjax: true
                        // isSignup: true
                    }
                );
            }
            else if (action.status === 'success') {
                ret = Object.assign(
                    {},
                    state,
                    {
                        isBeginAjax: false,
                        isSignup: true
                    }
                );
            }
            else if (action.status === 'error') {
                ret = Object.assign(
                    {},
                    state,
                    {
                        isBeginAjax: false,
                        isSignup: false,
                        error: action.payload
                    }
                );
            }
            return ret;
        case 'SIGN_OUT':
            ret = Object.assign({},
                state,
                {
                    isSignon: false,
                    token: action.payload.token,
                    userName: action.payload.userName || 'default',
                    userAvartar: action.payload.userAvartar || './images/test.jpg',
                });
            return ret;
        default:
            return state;
    }
}

export default handleActions;