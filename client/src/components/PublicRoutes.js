import React, {useEffect} from "react"
import {useNavigate} from "react-router-dom"
import {useCookies} from "react-cookie"

const PublicRoute = ({children}) => {
	const navigate = useNavigate()
	const [cookies, removeCookies] = useCookies([])

	const handleCookieRemoval = () => {
		if (cookies.jwt) {
			removeCookies("jwt")
			navigate("/login")
		}
	}

	useEffect(() => {
		handleCookieRemoval()
	}, [cookies.jwt, navigate,removeCookies])
	return <div>{children}</div>
}

export default PublicRoute
