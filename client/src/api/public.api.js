import axios from "axios"
import Cookies from 'js-cookie';

// const token = Cookies.get("jwt")

const publicClient = axios.create({
    baseURL:"http://localhost:5000",

})

publicClient.interceptors.request.use(async config =>{
    return {
        ...config,
        headers:{
            "Content-Type": "application/json",
            // "Authorization": `Bearer ${token}`,
            "Access-Controll-Allow-Origin": "*",
        },
    }
})



export default publicClient;