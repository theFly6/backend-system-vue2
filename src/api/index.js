import http from "@/utils/request";

// 请求首页数据
export const getData = () => {
    // 返回一个promise对象
    return http.get('/home/getData')
}

// 请求用户数据
export const getUser = () => http.get('/user/getUser')
export const addUser = (params) => http.post('/user/addUser', params)
export const delUser = (params) => http.post('/user/delUser', params)
export const editUser = (params) => http.post('/user/editUser', params)

// 用户登陆
export const checkPemission = (params) => http.post('/permission/login', params)
