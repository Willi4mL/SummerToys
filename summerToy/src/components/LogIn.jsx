import { useRecoilState } from "recoil"
import { loginState } from "./Atom"

const LogIn = () => {
	const [isVisibleLogIn, setIsvisibleLogIn] = useRecoilState(loginState)

	return (
		<div className="log">
			{isVisibleLogIn && <div className="login-container">
				<form className="login-form">
					<h2 className="login-header">Logga in</h2>
					<p className="username">Användarnamn:</p>
					<input className="login-input-name"></input>
					<p className="password">Lösenord:</p>
					<input className="login-input-password"></input>
					<button className="login-button"> Logga in</button>
				</form>
			</div>}
		</div>

	)
}
export default LogIn