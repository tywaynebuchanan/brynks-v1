import axios from "axios"

const publicClient = axios.create({
    baseURL:"http://localhost:5000",
  
})

publicClient.interceptors.request.use(async config =>{
     const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("jwt="))
    .split("=")[1];
    return {
        ...config,
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
            "Access-Controll-Allow-Origin": "*",
        },
    }
})



export default publicClient;