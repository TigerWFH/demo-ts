import { combineReducers } from 'redux';
import Nav from './nav/reducers/index';

// let initialState = {
//     nav: {
//         signon: false,
//         signup: false
//     },
// };

// function handleActions(previousState: any = initialState, action: any = {}) {
//     switch (action.type) {
//         case '1':
//             return Object.assign({}, previousState, action.payload);
//         case '2':
//             return Object.assign({}, previousState, action.payload);
//         default:
//             return previousState;
//     }
// }

export const reducers = combineReducers({
    nav: Nav
});