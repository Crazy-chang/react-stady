
// 使用单个store状态管理
import { legacy_createStore as createStore } from 'redux'
const initData = {
  token: null,
  status: false,
  userInfo: {},
  breadcrumbList:[],
  useEquipment:'pc', // 使用设备 pc 、 phone
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
    case 'SETUSEEQUIPMENT': {
      const { useEquipment } = action
      return {
        ...state,
        useEquipment
      }
    }
    default:
      return state;
  }
}

export default createStore(stores)

