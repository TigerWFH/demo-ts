let initialState = {
    root: 'nav',
    number: 123
};
// 此处处理UI逻辑
function handleActions(state = initialState, action: any = {}) {
    switch (action.type) {
        case 'SIGN_ON':
            return Object.assign({}, state, { payload: action.payload });
        case 'SIGN_UP':
            return Object.assign({}, state, { payload: action.payload });
        default:
            return state;
    }
}

export default handleActions;