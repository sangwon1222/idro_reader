import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:1222/api/",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 3000,
});

axios.interceptors.request.use(
  function (config) {
    // 요청을 보내기 전에 수행할 일
    // ...
    console.warn(config);
    return config;
  },
  function (error) {
    // 오류 요청을 보내기전 수행할 일
    // ...
    return Promise.reject(error);
  }
);

api.interceptors.response.use(null, async (error: any) => {
  const status = error.response?.status;

  if (status === 400) {
    //
  }

  if (status === 401) {
    return Promise.reject(error);
  }
  if (error.code === "ERR_NETWORK") {
    localStorage.clear();
  }
});

export default api;
