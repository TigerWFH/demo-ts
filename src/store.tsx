import { createStore } from 'redux';
import handleActions from './module1/reducers';
// import { reducers } from './reducers';
// let store = createStore(reducers);
// store的api:subscribe(),dispatch(),getState()
// 根据reducers创建store

let store = createStore(handleActions);
store.subscribe(() => {
    console.log('store update', store.getState())
})
export default store;