import axios from "axios"

const privateClient = axios.create({
    baseURL:"http://localhost:5000",
    // baseURL: "https://brynks-api.onrender.com"


})

privateClient.interceptors.request.use(async config =>{
    //  const token = document.cookie
    // .split("; ")
    // .find((row) => row.startsWith("jwt="))
    // .split("=")[1];
    return {
        ...config,
        headers:{
            "Content-Type": "application/json",
            //  "Authorization": `Bearer ${token}`,
            "Access-Controll-Allow-Origin": "*",

        },
        withCredentials: true
    }
})



export default privateClient