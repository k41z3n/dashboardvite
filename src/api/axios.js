import axios from "axios";

const axiosConfig = axios.create({
    baseURL: `/risk-backend/rest/`,
});


export default axiosConfig;
