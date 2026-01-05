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
    },
    getAllCompanies: async () => {
        let data = await AxiosInstance.get("/api/companies")
        return data
    },
    applyCompanies: async (payload, token) => {
        let data = await AxiosInstance.post("/api/companies/apply", payload, {
            headers:{
                "Authorization": `Bearer ${token}`
            }
        })
        return data
    }
}
export default userServices;