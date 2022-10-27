
const key = 'hm-vant-mobile-token'
export const setToken = (Mytoken) => {
  localStorage.setItem(key, Mytoken)
}

export const getToken = () => {
  return localStorage.getItem(key)
}

export const removeToken = () => {
  localStorage.removeItem(key)
}
