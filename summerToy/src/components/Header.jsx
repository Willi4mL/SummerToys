import { NavLink } from "react-router-dom"
import { useRecoilState, useRecoilValue } from "recoil"
import { isLoggedInState, loginState, isBarsState, addPorductFormState, cartCountOneState, cartState } from "./Atom"
import { useEffect, useState } from "react"

const Header = () => {
	const [isVisibleLogIn, setIsvisibleLogIn] = useRecoilState(loginState)
	const [isLoggedIn, setIsloggedIn] = useRecoilState(isLoggedInState)
	const [isFilterBar, setFilterBar] = useRecoilState(isBarsState)
	const [isAddFormVisivible, setIsAddFormVisible] = useRecoilState(addPorductFormState)
	const [isPlus, setIsPlus] = useState(true)
	const [countOne, setCountOne] = useRecoilState(cartCountOneState)

	const cart = useRecoilValue(cartState)

	const countIcon = cart.reduce((a, product) => {
		const quantity = countOne[product.id] || 1
		return Number(a) + Number(quantity)
	},0)

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

	const handleScreenSize = () => {
		if(window.innerWidth < 760) {
			setIsPlus(true)
		}
		else {
			setIsPlus(false)
		}
	}

	useEffect(() => {
		handleScreenSize()
		window.addEventListener('resize', handleScreenSize)
		return () => window.removeEventListener('resize', handleScreenSize)
	},[])

	if (isLoggedIn) {
		return (
			<header className="header-container">
				<div className="empty-space">
					<p className="header-login" onClick={toggleLogIn}>Logga in</p>
				</div>
				<NavLink to='products' style={{ textDecoration: "none" }}><h1 className="header-heading" onClick={handleClose}>Jump</h1></NavLink>
				<div className="empty-space">
					<NavLink to='cart'><img className="header-icon" src="/images/blueCart.png" alt='add to cart' onClick={() => { setFilterBar(false) }} /></NavLink>
					<p className="count-cart">{countIcon}</p>
				</div>
			</header>
		)
	}
	else {
		return (
			<header className="header-container">
				<div className="empty-space">
					<p className="header-login" onClick={LogOut}><NavLink to='products' style={{ textDecoration: "none", color: '#1979e6'}}>Logga ut</NavLink></p>
				</div>
				<h1 className="header-heading"><NavLink to='/admin' onClick={handleClose} style={{ textDecoration: "none" }}>Jump</NavLink></h1>
				<div className="empty-space">
					{isPlus ? <p className="header-icon plus" onClick={handleAddObject}>+</p> : <p className="header-icon plus add-text" onClick={handleAddObject}>Lägg till</p> }
				</div>
			</header>
		)
	}
}
export default Header