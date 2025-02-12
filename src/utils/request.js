import Axios from "axios";
import { message } from "antd";

const config = {
  baseURL: "http://localhost:3000",
  timeout: 3000,
  headers: {
    // Accept: "application/json, text/plain, */*",
    // "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json;charset=utf-8",
  },
};

const instance = Axios.create(config);

// 添加请求拦截器
instance.interceptors.request.use(
  (config) => {
    // console.log("添加请求拦截器=1", config);
    const token = sessionStorage.getItem("token") || null;
    if (token) {
      // config.headers["Authorization"] = `Bearer ${token}`;
      // tyg api token
      config.headers["Access-Token"] = token;
    }
    config.data = {
      body: config.data,
      header: { token, timestamp: +new Date() },
    };

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
// 添加响应拦截器
instance.interceptors.response.use(
  (response) => {
    // console.log("添加响应拦截器=3", response);
    if ([0, "0"].includes(response.data.code)) {
      return Promise.resolve(response.data);
    } else {
      message.error(response.data.message);
      return Promise.resolve({
        code: response.data.code,
        message: response.data.message,
      });
    }
  },
  (error) => {
    console.log("添加响应拦截器失败", error);
    return Promise.reject(error);
  }
);

export default instance;
