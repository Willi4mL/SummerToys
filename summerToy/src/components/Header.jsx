import { NavLink } from "react-router-dom"
import { useRecoilState } from "recoil"
import { isLoggedInState, loginState, isBarsState, addPorductFormState } from "./Atom"

const Header = () => {
	const [isVisibleLogIn, setIsvisibleLogIn] = useRecoilState(loginState)
	const [isLoggedIn, setIsloggedIn] = useRecoilState(isLoggedInState)
	const [isFilterBar, setFilterBar] = useRecoilState(isBarsState)
	const [isAddFormVisivible, setIsAddFormVisible] = useRecoilState(addPorductFormState)

	const handleAddObject = () => {
		setIsAddFormVisible(true)
		setFilterBar(false)
	}

	const handleClose = () => {
		setIsAddFormVisible(false)
		setFilterBar(true)
	}
	
	const toggleLogIn = () => {
		setIsvisibleLogIn(!isVisibleLogIn)
	}

	const LogOut = () => {
		setIsloggedIn(true)
		setFilterBar(true)
		setIsAddFormVisible(false)
	}

	if (isLoggedIn) {
		return (
			<header className="header-container">
				<div className="empty-space">
					<p className="header-login" onClick={toggleLogIn}>Logga in</p>
				</div>
				<NavLink to='products'><h1 className="header-heading" onClick={handleClose}>Jump</h1></NavLink>
				<div className="empty-space">
					<img className="header-icon" src="/images/cart.png" alt='add to cart' onClick={() => { setFilterBar(false) }} />
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
				<h1 className="header-heading"><NavLink to='products/admin' onClick={handleClose}>Jump</NavLink></h1>
				<div className="empty-space">
					<img className="header-icon" src="/images/add.png" alt='add object' onClick={handleAddObject} />
				</div>
			</header>
		)
	}
}
export default Header