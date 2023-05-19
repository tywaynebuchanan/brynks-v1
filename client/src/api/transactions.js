import publicClient from "./public.api"

export const verifyAcc = async (payload)=>{
    try {
        const {data} = await publicClient.post("/api/transactions/verify-user",payload)
        return data
    } catch (error) {
        console.log(error.response.data)
        return error.response.data

    }
}

export const transferFunds = async(payload)=>{
    try {
        const {data} = await publicClient.post("/api/transactions/transfer-funds",payload)
        return data
    } catch (error) {
         console.log(error.response.data)
        return error.response.data
    }
}

export const transactionsList = async(payload)=>{
    try {
        const {data} = await publicClient.post("/api/transactions/transactions-list",payload)
        return data
    } catch (error) {
        console.log(error.response.msg)
        return error.response.data.msg
    }
}

