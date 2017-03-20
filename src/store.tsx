import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import handleActions from './nav/reducers';
// import { reducers } from './reducers';
// let store = createStore(reducers);
// store的api:subscribe(),dispatch(),getState()
// 根据reducers创建store

let store = createStore(handleActions, applyMiddleware(thunkMiddleware));
store.subscribe(() => {
    console.log('store update', store.getState())
})
export default store;