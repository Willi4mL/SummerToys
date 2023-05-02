import { NavLink } from "react-router-dom"
import { useRecoilState } from "recoil"
import { loginState } from "./Atom"

const Header = () => {
	const [isVisvibleLogIn, setIsvisibleLogIn] = useRecoilState(loginState)

	const toggleLogIn = () => {
		setIsvisibleLogIn(!isVisvibleLogIn)
		console.log('Click on login')
	}
	return (
		<header className="header-container">
			<p className="header-login" onClick={toggleLogIn}>Logga in</p>
			<NavLink to='home'><h1 className="header-heading">Skoja</h1></NavLink>
			<NavLink to='cart'><img className="header-icon" src="/images/cart.png" /> </NavLink>
		</header>
	)
}
export default Header