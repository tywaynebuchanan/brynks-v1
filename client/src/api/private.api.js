import axios from "axios"

const privateClient = axios.create({
    // baseURL:"http://localhost:5000",
    baseURL: "https://brynks-v1-api.vercel.app/"

})

privateClient.interceptors.request.use(async config =>{
    return {
        ...config,
        headers:{
            "Content-Type": "application/json",
            // "Authorization": `Bearer ${token}`,
            "Access-Controll-Allow-Origin": "*",

        },
        withCredentials: true
    }
})



export default privateClient