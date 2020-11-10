/**
 * 用户相关请求模块
 */

// 加载 request 模块
import request from '@/utils/request'

// 用户登录
export const login = data => {
  return request({
    method: 'GET',
    url: '/SEUMedia/login',
    params: {
      password: data.password,
      userStatus: data.userStatus,
      username: data.username
    }
  })
}

// 用户注册
export const regist = data => {
  // 将结果返回
  return request({
    method: 'GET',
    url: '/SEUMedia/regist',
    params: {
      email: data.email,
      password: data.password,
      phone: data.phone,
      userStatus: data.userStatus,
      username: data.username
    }
  })
}
