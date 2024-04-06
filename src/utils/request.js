import axios from 'axios';

const http = axios.create({
    baseURL: '/api', // 设置基础 URL
    timeout: 5000, // 请求超时时间5s
});

// 添加请求拦截器
http.interceptors.request.use(
    (config) => {
        // 在发送请求之前做些什么，比如添加请求头等操作
        return config;
    },
    (error) => {
        // 对请求错误做些什么
        console.log('请求失败了')
        return Promise.reject(error);
    }
);

// 添加响应拦截器
http.interceptors.response.use(
    (response) => {
        // 对响应数据做些什么
        return response.data;
    },
    (error) => {
        // 对响应错误做些什么
        console.log('响应失败了')
        return Promise.reject(error);
    }
);

export default http;
