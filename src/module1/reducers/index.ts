let handleActions = (state = {}, action: any) => {
    switch (action.type) {
        case 'FETCH_DATA':
            return Object.assign({}, state, action.data)
        default:
            return state;
    }
};

export default handleActions;