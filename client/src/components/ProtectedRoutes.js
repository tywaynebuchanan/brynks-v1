import {useState, useEffect, useReducer} from "react"
import {message} from "antd"
import {getter, setter, userEndpoints} from "../api/users"
import {useNavigate} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {SetUser, ReloadUser} from "../redux/usersSlice"
import {ShowLoading, HideLoading} from "../redux/loaderSlice"
import {useCookies} from "react-cookie"
import DefaultLayout from "./DefaultLayout"
import axios from "axios"

const ProtectedRoutes = ({children}) => {
	const navigate = useNavigate()
	const [cookies, setCookie, removeCookie] = useCookies([])
	const {user, reloadUser} = useSelector(state => state.users)
	const dispatch = useDispatch()
	const token = cookies.jwt

	useEffect(() => {
		const verifyUser = async () => {
			if (!cookies.jwt) {
				navigate("/login")
			} else {
				const {data} = await axios.post(
					"http://localhost:5000/api",
					{},
					{
						withCredentials: true,
					}
				)
				if (!data.status) {
					removeCookie("jwt")
					navigate("/login")
					message.error("You have been logged out")
				} else {
					dispatch(SetUser(data.user))
					console.log(data.user)
				}
			}
		}
		verifyUser()
	}, [])

	return (
		user && (
			<div>
				<DefaultLayout>{children}</DefaultLayout>
			</div>
		)
	)
}

export default ProtectedRoutes
