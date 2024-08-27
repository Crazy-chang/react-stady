import request from '../utils/request';

// 登录
export function login(data) {
    return request({
        url: '/web/auth/login',
        method: 'post',
        data,
    });
}

// ==============  账号管理  ===================
// 系统设置_账号管理_列表
export function accountAdminList(data) {
    return request({
      url: "/web/accountAdmin/accountAdminList",
      method: "post",
      data,
    });
  }
  
  // 系统设置_账号管理_详情
  export function userAdminGetEditInfo(data) {
    return request({
      url: "/web/userAdmin/getEditInfo",
      method: "post",
      data,
    });
  }
  
  // 系统设置_账号管理_编辑
  export function editAccountAdmin(data) {
    return request({
      url: "/web/accountAdmin/editAccountAdmin",
      method: "post",
      data,
    });
  }
  
  // 系统设置_账号管理_新增
  export function addAccountAdmin(data) {
    return request({
      url: "/web/accountAdmin/addAccountAdmin",
      method: "post",
      data,
    });
  }
  
  // 系统设置_账号管理_启用
  export function activeAccountAdmin(data) {
    return request({
      url: "/web/accountAdmin/activeAccountAdmin",
      method: "post",
      data,
    });
  }
  // 系统设置_账号管理_停用
  export function stopAccountAdmin(data) {
    return request({
      url: "/web/accountAdmin/stopAccountAdmin",
      method: "post",
      data,
    });
  }
  // 系统设置_账号管理_删除
  export function deleteAccountAdmin(data) {
    return request({
      url: "/web/accountAdmin/signOffAccountAdmin",
      method: "post",
      data,
    });
  }