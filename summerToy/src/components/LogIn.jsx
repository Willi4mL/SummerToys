import { useRecoilState } from "recoil"
import { isBarsState, loginState, isLoggedInState } from "./Atom"
import { NavLink } from "react-router-dom"

const LogIn = () => {
	const [isVisibleLogIn, setIsvisibleLogIn] = useRecoilState(loginState)
	const [isLoggedIn, setIsloggedIn] = useRecoilState(isLoggedInState)
	const [isFilterBar, setFilterBar] = useRecoilState(isBarsState)

	const handleLogIn = () => {
		setIsvisibleLogIn(false)
		setIsloggedIn(false)
		setFilterBar(true)
	}

	return (
		<div className="log">
			{isVisibleLogIn && <div className="login-container">
				<form className="login-form">
					<h2 className="login-header">Logga in</h2>
					<img className="close-icon" src="/images/close.png" alt='close' onClick={() => {setIsvisibleLogIn(false)}}/>
					<p className="username">Användarnamn:</p>
					<input className="login-input-name"></input>
					<p className="password">Lösenord:</p>
					<input className="login-input-password"></input>
					<button className="login-button" onClick={handleLogIn}><NavLink to='logged-in'> Logga in </NavLink></button>
				</form>
			</div>}
		</div>

	)
}
export default LogIn