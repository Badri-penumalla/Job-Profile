import axios from "axios";

let BASE_URL = "https://jobportal-4-z5z1.onrender.com/"

let AxiosInstance = axios.create({
    baseURL: BASE_URL
})

export default AxiosInstance;