
// 使用单个store状态管理
import { legacy_createStore as createStore } from 'redux'
const initData = {
  token: null,
  status: false,
  userInfo: {}
}

function stores(state = initData, action) {
  switch (action.type) {
    case 'SETTOKEN': {
      const { token } = action;
      if (token) {
        sessionStorage.setItem('token', token)
      } else {
        sessionStorage.clear()
      }
      return { ...state, token };
    }
    default:
      return state;
  }
}

export default createStore(stores)

