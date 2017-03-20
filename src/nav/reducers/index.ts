let initialState = {
    isSuccess: false
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
                        payload: action.payload,
                        isSuccess: true
                    });
            }
            else if (action.status === 'error') {
                ret = Object.assign({},
                    state,
                    {
                        payload: action.payload,
                        isSuccess: false
                    });
            }
            return ret;
        case 'SIGN_UP':
            if (action.status === 'begin') {
                ret = Object.assign({}, state, { payload: action.payload });
            }
            else if (action.status === 'success') {
                ret = Object.assign({}, state, { payload: action.payload });
            }
            else if (action.status === 'error') {
                ret = Object.assign({}, state, { payload: action.payload });
            }
            return ret;
        default:
            return state;
    }
}

export default handleActions;