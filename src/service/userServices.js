import AxiosInstance from "../instance/axiosInstance";

const userServices = {
    registerUser: async (payload) => {
        let data = await AxiosInstance.post("/api/users/register", payload);
        return data;
    },
    verifyUser: async (payload) => {
        let data = await AxiosInstance.post("/api/users/verify-otp", payload);
        return data;
    },
    loginUser: async (payload) => {
        let data = await AxiosInstance.post("/api/users/login", payload);
        return data;
    }
}
export default userServices;