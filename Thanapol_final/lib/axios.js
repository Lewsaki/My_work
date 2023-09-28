import axios from "axios";

const token = sessionStorage.getItem('token')
const opt = {}

if (token) {
    opt.headers = {
        Authorization: `Bearer ${token}`,
    }
}

const _axios = axios.create(opt)

export default _axios