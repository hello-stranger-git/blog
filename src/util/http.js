import axios from 'axios'
import store from '../store';
export let http = axios.create({
    baseURL: '/api',
    timeout: 1000,
  });

//响应拦截器
http.interceptors.response.use((res) =>{
  return res;
}, function (error) {
  return Promise.reject(error);
});
//请求拦截器
http.interceptors.request.use((config)=>{
  if(store.state.token){//将token带回去验证
    config.headers.authorization = 'Bearer '+store.state.token;
  }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});