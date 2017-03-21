let initialState = {
    isSignon: false,
    isSignup: false,
    userName: '',
    userAvartar: ''
};
// 此处处理UI逻辑
function handleActions(state = initialState, action: any = {}) {
    let ret: any = {};
    switch (action.type) {
        case 'SIGN_ON':
            if (action.status === 'success') {
                ret = Object.assign({},
                    state,
                    {
                        isSignon: true,
                        token: action.payload.token//,
                        //userName: action.payload.userName
                    });
            }
            else if (action.status === 'error') {
                ret = Object.assign({},
                    state,
                    {
                    });
            }
            return ret;
        case 'SIGN_UP':
            if (action.status === 'success') {
                ret = Object.assign({},
                    state,
                    { isSignup: true });
            }
            else if (action.status === 'error') {
                ret = Object.assign(
                    {},
                    state,
                    {}
                );
            }
            return ret;
        default:
            return state;
    }
}

export default handleActions;