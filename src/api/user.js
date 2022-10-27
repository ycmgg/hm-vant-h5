import request from '@/utils/request'

// 登录
export const getLogin = (data) => {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

// 注册
export const getRegister = (data) => {
  return request({
    url: '/user/register',
    method: 'post',
    data
  })
}

// 获取面经列表
export const getInterviewList = ({ current, sorter }) => {
  return request.get('/interview/query', {
    params: {
      current: current, pageSize: 10, sorter: sorter
    }
  })
}

// 获取我的收藏
export const getInterviewOptList = (params) => {
  return request({
    method: 'get',
    url: '/interview/opt/list',
    params
  })
}

export const getArticleDetail = (id) => {
  return request.get('interview/show', {
    params: {
      id
    }
  })
}

export const updateLike = (id) => {
  return request.post('interview/opt', {
    id,
    optType: 1 // 喜欢
  })
}

export const updateCollect = (id) => {
  return request.post('interview/opt', {
    id,
    optType: 2 // 收藏
  })
}

// 获取用户信息
export const getUserInfo = () => {
  return request('/user/currentUser')
}
