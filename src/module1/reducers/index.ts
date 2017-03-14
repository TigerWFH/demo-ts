let handleActions = (state = {}, action: any) => {
    switch (action.type) {
        case 'FETCH_DATA':
            console.log('fetchData--->reducers');
            return Object.assign({}, state, action.data)
        default:
            return state;
    }
};

export default handleActions;