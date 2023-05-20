import axios from "axios"

const publicClient = axios.create({
    // baseURL:"http://localhost:5000",
    baseURL: "https://brynks-api.onrender.com"
  
})

publicClient.interceptors.request.use(async config =>{
    
    return {
        ...config,
        headers:{
            "Content-Type": "application/json",
            "Access-Controll-Allow-Origin": "*",
        },
    }
})



export default publicClient;