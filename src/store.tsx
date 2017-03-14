import { createStore } from 'redux'
import handleActions from './module1/reducers'

// 根据reducers创建store
let store = createStore(handleActions);

export default store;