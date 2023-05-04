import { NavLink } from "react-router-dom"
import { useRecoilState } from "recoil"
import { isLoggedInState, loginState, isBarsState } from "./Atom"

const Header = () => {
	const [isVisibleLogIn, setIsvisibleLogIn] = useRecoilState(loginState)
	const [isLoggedIn, setIsloggedIn] = useRecoilState(isLoggedInState)
	const [isFilterBar, setFilterBar] = useRecoilState(isBarsState)

	const toggleLogIn = () => {
		setIsvisibleLogIn(!isVisibleLogIn)
	}
	
	const LogOut = () => {
		setIsloggedIn(true)
		setFilterBar(true)
	}

	if (isLoggedIn) {
		return (
			<header className="header-container">
				<div className="empty-space">

				<p className="header-login" onClick={toggleLogIn}>Logga in</p>
				</div>
				<NavLink to='products'><h1 className="header-heading" onClick={() => {setFilterBar(true)}}>Jump</h1></NavLink>
				<div className="empty-space">
					<NavLink to='cart'><img className="header-icon" src="/images/cart.png" alt='add to cart' onClick={() => {setFilterBar(false)}} /> </NavLink>
				</div>
			</header>
		)
	}
	else {
		return (
			<header className="header-container">
				<div className="empty-space">

				<p className="header-login" onClick={LogOut}><NavLink to='products'>Logga ut</NavLink></p>
				</div>
				<h1 className="header-heading"><NavLink to='products' onClick={() => {setFilterBar(true)}}>Jump</NavLink></h1>
				<div className="empty-space">
					<NavLink to='add-object'><img className="header-icon" src="/images/add.png" alt='add object' onClick={() => {setFilterBar(false)}} /> </NavLink>
				</div>
			</header>
		)
	}
}
export default Header