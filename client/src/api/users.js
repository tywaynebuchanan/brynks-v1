import privateClient  from "./private.api";
import publicClient from "./public.api";

export const userEndpoints = {
    register: "/api/auth/register",
    login: "/api/auth/login",
    getInfo: "/api/auth/user",
    changePassword: "/api/auth/password",
    resetPassword: "/api/auth/email-forgot-password",
    getUsers: "/api/auth/admin/users",
    verifyUsers: "/api/auth/admin/verify-user",
    changePasswordByAdmin:"/api/auth/admin/reset-user-password",
    dashboard: "/"
}

export const getter = async(endpoints)=>{
    try {
        const {data} = await privateClient.get(`${endpoints}`)
        console.log(data)
        return data
    } catch (error) {
        return error.response.data
    }
}

export const getterPublic = async(endpoints)=>{
    try {
        const {data} = await publicClient.get(`${endpoints}`)
        console.log(data)
        return data
    } catch (error) {
        return error.response.data
    }
}

export const setter = async(endpoints,request)=>{
    try {
        const {data} = await privateClient.post(`${endpoints}`,request)
        return data
    } catch (error) {
         return error.response.data
    }
}

export const setterPublic = async(endpoints,request)=>{
    try {
        const {data} = await privateClient.post(`${endpoints}`,request)
        return data
    } catch (error) {
         return error.response.data
    }
}