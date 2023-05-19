import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'

const PublicRoute = ({children}) => {

    const navigate = useNavigate()
    const [cookies,removeCookies] = useCookies([])
    useEffect(()=>{
        if(!cookies.jwt){
          removeCookies("jwt")
           navigate("/login")
        }
    },[])
  return (
    <div>{children}</div>
  )
}

export default PublicRoute