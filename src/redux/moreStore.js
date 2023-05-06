// 通过combineReducers来使用多个store状态管理
import { legacy_createStore as createStore, combineReducers } from 'redux'

import allReducer from './more/allReducer'
import userReducer from './more/userReducer'

const rootReducer = combineReducers({
    allReducer: allReducer,
    userReducer: userReducer
})

const store = createStore(rootReducer)
export default store;