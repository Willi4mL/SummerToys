import { useRecoilState } from "recoil"
import { isBarsState, loginState, isLoggedInState, productDetailState } from "./Atom"
import { NavLink } from "react-router-dom"
import { validUsername } from "./Validation"
import { useState } from "react"
import close from '../images/close.png'

const LogIn = () => {
	const [isVisibleLogIn, setIsvisibleLogIn] = useRecoilState(loginState)
	const [isLoggedIn, setIsloggedIn] = useRecoilState(isLoggedInState)
	const [isFilterBar, setFilterBar] = useRecoilState(isBarsState)
	const [isDetailVisible, setIsDetailVisible] = useRecoilState(productDetailState)
	const [username, setUsername] = useState('')
	const [invalidUsername, setInvalidUsername] = useState(false)
	const [emptyUsername, setEmptyUsername] = useState(false)
	const [password, setPassword] = useState('')
	const [invalidPassword, setInvalidPassword] = useState(false)
	const [emptyPassword, setEmptyPassword] = useState(false)

	const [isValidUsername, notValidUsername] = validUsername(username)
	const validClassUsername = invalidUsername ? isValidUsername ? 'valid' : 'invalid' : ''

	const handleLogIn = (event) => {
		event.preventDefault()
		if (password !== 'password') {
			setInvalidPassword(true)
		}
		else if (username && password) {
			setIsvisibleLogIn(false)
			setIsloggedIn(false)
			setFilterBar(true)
			setIsDetailVisible(false)
			setUsername('')
			setPassword('')
			setInvalidPassword(false)
			setInvalidUsername(false)
		}
	}

	const handlePassword = (e) => {
		setPassword(e.target.value)
		if (e.target.value === '') {
			setEmptyPassword(true)
		}
		else {
			setEmptyPassword(false)
		}
	}

	const handleUsername = (e) => {
		setUsername(e.target.value)
		if (e.target.value === '') {
			setEmptyUsername(true)
		}
		else {
			setEmptyUsername(false)
		}
	}

	return (
		<div className="log">
			{isVisibleLogIn && <div className="login-container">
				<form className="login-form">
					<h2 className="login-header">Logga in</h2>
					<img className="close-icon" src={close} alt='close' onClick={() => { setIsvisibleLogIn(false) }} />
					<p className="username">Användarnamn:</p>
					<div className='username-container'>
						<input className="login-input-name"
							type="text"
							value={username}
							onChange={handleUsername}
							onBlur={() => setInvalidUsername(!isValidUsername)}>
						</input>
						<p className="error-username">
							{invalidUsername ? notValidUsername : ''}
						</p>
					</div>
					<p className="password">Lösenord:</p>
					<div className="password-container">
						<input className="login-input-password"
							type='password'
							value={password}
							onChange={handlePassword}>
						</input>
						<p className="error-password">
							{invalidPassword && 'Fel lösenord'}
						</p>
					</div>
					<button className="login-button" onClick={handleLogIn}><NavLink to='admin/products' style={{ textDecoration: "none", color: '#f3efef' }}> Logga in </NavLink></button>
				</form>
			</div>}
		</div>

	)
}
export default LogIn