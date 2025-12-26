import AxiosInstance from "../instance/axiosInstance";

const userServices = {
    registerUser: async (payload) => {
        let data = await AxiosInstance.post("/api/users/register", payload);
        return data;
    }
}