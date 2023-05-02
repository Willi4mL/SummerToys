import { NavLink } from "react-router-dom"
import { useRecoilState } from "recoil"
import { isLoggedInState, loginState, isAddObjectState } from "./Atom"

const Header = () => {
	const [isVisibleLogIn, setIsvisibleLogIn] = useRecoilState(loginState)
	const [isLoggedIn, setIsloggedIn] = useRecoilState(isLoggedInState)
	const [isAddObject, setIsAddObject] = useRecoilState(isAddObjectState)

	const toggleLogIn = () => {
		setIsvisibleLogIn(!isVisibleLogIn)
	}
	
	const LogOut = () => {
		setIsloggedIn(true)
		setIsAddObject(true)
	}

	if (isLoggedIn) {
		return (
			<header className="header-container">
				<p className="header-login" onClick={toggleLogIn}>Logga in</p>
				<NavLink to='home'><h1 className="header-heading">Skoja</h1></NavLink>
				<div className="empty-space">
					<NavLink to='cart'><img className="header-icon" src="/images/cart.png" alt='add to cart' /> </NavLink>
				</div>
			</header>
		)
	}
	else {
		return (
			<header className="header-container">
				<p className="header-login" onClick={LogOut}><NavLink to='home'>Logga ut</NavLink></p>
				<h1 className="header-heading"><NavLink to='home'>Skoja</NavLink></h1>
				<div className="empty-space">
					<NavLink to='add-object'><img className="header-icon" src="/images/add.png" alt='add object' /> </NavLink>
				</div>
			</header>
		)
	}
}
export default Header