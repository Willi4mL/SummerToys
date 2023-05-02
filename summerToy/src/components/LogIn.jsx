import { useRecoilState } from "recoil"
import { loginState } from "./Atom"
import { NavLink } from "react-router-dom"
import { isLoggedInState, isAddObjectState } from "./Atom"

const LogIn = () => {
	const [isVisibleLogIn, setIsvisibleLogIn] = useRecoilState(loginState)
	const [isLoggedIn, setIsloggedIn] = useRecoilState(isLoggedInState)
	const [isAddObject, setIsAddObject] = useRecoilState(isAddObjectState)

	const closeLogIn = () => {
		setIsvisibleLogIn(false)
		setIsloggedIn(false)
		setIsAddObject(false)
	}
	return (
		<div className="log">
			{isVisibleLogIn && <div className="login-container">
				<form className="login-form">
					<h2 className="login-header">Logga in</h2>
					<img className="close-icon" src="/images/close.png" alt='close' onClick={closeLogIn}/>
					<p className="username">Användarnamn:</p>
					<input className="login-input-name"></input>
					<p className="password">Lösenord:</p>
					<input className="login-input-password"></input>
					<button className="login-button" onClick={closeLogIn}><NavLink to='logged-in'> Logga in </NavLink></button>
				</form>
			</div>}
		</div>

	)
}
export default LogIn