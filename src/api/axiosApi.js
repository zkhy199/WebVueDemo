/**
 * axiosApi封装，接口属于mock，可以修改
 * author：liuguangrui
 */

import axios from 'axios'
import { Message } from "iview";
import qs from 'qs'

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'; //请求头类型著名
axios.defaults.baseURL = 'https://easy-mock.com/mock/5b0d0d3e79a406394bf704b0/';//测试地址

//POST传参序列化
axios.interceptors.request.use((config) => {
    // config.headers['X-Token'] = getToken() // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
    if (config.method === 'post') {
        config.data = qs.stringify(config.data);
    }
    return config;
}, (error) => {
    Message.error("错误的传参", 'fail');
    return Promise.reject(error);
});

//返回状态判断
axios.interceptors.response.use((res) => {
    if (!res.data.success) {
        Message.error(res.data.msg);
    }else{
        Message.success(res.data.msg);
    }
    return res;
}, (error) => {
    Message.error("网络异常", 'fail');
    return Promise.reject(error);
});

export function fetch(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            })
            .catch((error) => {
                reject(error)
            })
    })
}

export default {
    Login(params) { return fetch('/example/login', params) },/*用户登录*/
}
