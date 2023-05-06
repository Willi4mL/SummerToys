import { useEffect, useState } from "react"
import { useRecoilState } from "recoil"
import { productState, searchState, addPorductFormState, productDetailState, isBarsState, isLoggedInState, findMatchState } from "../components/Atom.js"
import { url, shopId } from "../scripts/Constant.js"
import { NavLink } from "react-router-dom"
import DeleteProduct from "../components/DeleteProduct.jsx"

const Products = () => {
	const [productCard, setProductCard] = useRecoilState(productState)
	const [search, setSearch] = useRecoilState(searchState)
	const [findMatch, setFindMatch] = useRecoilState(findMatchState)
	const [isAddFormVisivible, setIsAddFormVisible] = useRecoilState(addPorductFormState)
	const [isDetailVisible, setIsDetailVisible] = useRecoilState(productDetailState)
	const [isFilterBar, setFilterBar] = useRecoilState(isBarsState)
	const [isLoggedIn, setIsloggedIn] = useRecoilState(isLoggedInState)

	useEffect(() => {
		async function fetchItem() {
			try {
				const response = await fetch(url + '?action=get-products&shopid=' + shopId)
				const data = await response.json()
				setProductCard(data)
			} catch (error) {
				console.log('Problem with fetching', error)
			}
		}
		console.log('inside productCard', productCard)
		fetchItem()
	}, [])

	useEffect(() => {
		const newMatch = productCard.filter((product) =>
			product.name.includes(search))

		setFindMatch(newMatch)
		console.log('NewMatch', newMatch)
	}, [search])

	const handldeProductDetail = () => {
		setIsDetailVisible(true)
		setFilterBar(false)
	}

	if (!isAddFormVisivible && isLoggedIn) {
		return (
			<main>
				<div className="centering-grid">
					<ul className="card-grid">
						{findMatch.length > 0 ? (
							findMatch.map((item) => (
								<NavLink to={'/products/'}><li className="card-container" key={item.id} onClick={handldeProductDetail}>
									<div className="card-img--position">
										<img className="card-img" src={item.picture} alt={item.name} />
									</div>
									<div className="card-text--position">
										<h3 className="card-name">{item.name}</h3>
										<p className="card-price">{item.price} kr</p>
									</div>
								</li></NavLink>
							))
						) : (
							productCard.map((item) => (
								<NavLink to={'/products/'}><li className="card-container" key={item.id} onClick={handldeProductDetail}>
									<div className="card-img--position">
										<img className="card-img" src={item.picture} alt={item.name} />
									</div>
									<div className="card-text--position">
										<h3 className="card-name">{item.name}</h3>
										<p className="card-price">{item.price} kr</p>
									</div>
								</li></NavLink>
							))
						)
						}
					</ul>
				</div>
			</main>
		)
	}
	else if (!isAddFormVisivible && !isLoggedIn) {
		return (
			<>
			<DeleteProduct />
			</>
		)
	}
}
export default Products