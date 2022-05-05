import axios from "axios";
axios.defaults.withCredentials = true;
const requests = axios.create({
  baseURL: "http://cloud-music.pl-fe.cn",
  timeout: 5000,
});

requests.interceptors.request.use((config) => {
  return config;
});

requests.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    return err;
  }
);
export default requests;
