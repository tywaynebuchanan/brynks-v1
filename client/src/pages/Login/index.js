import React, { Fragment,useState, useEffect } from "react";
import {Col, Row, Form, message, Checkbox} from "antd"
import {useNavigate} from "react-router-dom"
import axiosInstance from "../../api/private.api"
import { userEndpoints,getter,setter } from "../../api/users";
import {useCookies} from "react-cookie"
import Logo from "../../assets/logo-black.png"

const Login = () => {
	const navigate = useNavigate()
	const [cookies] = useCookies([])
	useEffect(() => {
		if (cookies.jwt) {
			navigate("/")
		}
	}, [cookies, navigate])

	const onFinish = async values => {
		try {
			const data = await setter(userEndpoints.login,values)
			if(data.success){
                message.success(data.msg)
				console.log(data.msg)
				navigate("/")
            }else {
				if(!data.success){
				message.error(data.msg)
				console.log(data.msg)
				}
			}
		} catch (error) {
			console.log(error.response.data)
		}
	}
	return (
		<Fragment>
			<div className='bg-primary flex items-center justify-center h-screen'>
				<div className='card w-400 p-2'>
					<div className='flex items-center justify-between w-400'>
						<img src={Logo} alt='Brynks Logo' className='login-logo' />
					</div>
					<Form layout='vertical' onFinish={onFinish}>
						<Row gutter={16}>
							<Col span={24}>
								<Form.Item label='Email' name='email'>
									<input type='email' placeholder='Username' />
								</Form.Item>
							</Col>

							<Col span={24}>
								<Form.Item label='Password' name='password'>
									<input type='password' placeholder='Enter Password' />
								</Form.Item>
							</Col>
						</Row>
						<button className='primary-contained-btn reg w-100' type='submit'>
							Login
						</button>
						<div className='flex justify-between mt-2'>
							<h1
								className='text-sm on-hover'
								onClick={() => navigate("/forget-password")}>
								Forget Password?
							</h1>
							<h1
								className='text-sm on-hover'
								onClick={() => navigate("/register")}>
								Not a Member? Register Now!
							</h1>
						</div>
					</Form>
				</div>
			</div>
		</Fragment>
	)
}

export default Login
