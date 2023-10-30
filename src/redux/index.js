
// 使用单个store状态管理
import { legacy_createStore as createStore } from 'redux'
const initData = {
  token: null,
  status: false,
  userInfo: {},
  breadcrumbList:[]
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
    case 'SETUSERINFO': {
      console.log("user--action",action)
      const { userInfo } = action
      return { ...state, userInfo}
    }
    case 'BREADCRUMB': {
      const { breadcrumbList } = action
      return {
        ...state,
        breadcrumbList
      }
    }
    default:
      return state;
  }
}

export default createStore(stores)

