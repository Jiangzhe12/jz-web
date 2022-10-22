import { message } from "antd";
import axios from "axios";

const request = axios.create({
    timeout: 5000,
})

request.interceptors.request.use((c) => {
    const token = localStorage.getItem('token');
    if(token){
        c.headers = {
            ...c.headers,
            authorization: token
        }
    }
    return c
})

request.interceptors.response.use(
    (res) => {
        return res.data
    },
    (e) => {
        message.error(e.message)
        return Promise.reject(e)
    }
)

export default request