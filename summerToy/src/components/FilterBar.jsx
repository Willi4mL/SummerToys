import { useRecoilState } from "recoil"
import { isBarsState, findMatchState, productState } from "./Atom"
import { useState } from "react"
import { useLocation } from "react-router-dom"

const FilterBar = () => {
	const [isFilterBar, setFilterBar] = useRecoilState(isBarsState)
	const [isNameVisible, setIsNameVisible] = useState(false)
	const [isPriceVisible, setIsPriceVisible] = useState(false)
	const [productCard, setProductCard] = useRecoilState(productState)
	const [findMatch, setFindMatch] = useRecoilState(findMatchState)

	const toggleName = () => {
		setIsNameVisible(!isNameVisible)
	}

	const togglePrice = () => {
		setIsPriceVisible(!isPriceVisible)
	}

	const handleSortHighName = () => {
		setProductCard([...productCard].sort((a, b) => b.name.localeCompare(a.name)))
		setFindMatch([...findMatch].sort((a, b) => b.name.localeCompare(a.name)))
	}

	const handleSortLowName = () => {
		setProductCard([...productCard].sort((a, b) => a.name.localeCompare(b.name)))
		setFindMatch([...findMatch].sort((a, b) => a.name.localeCompare(b.name)))
	}

	const handleSortHighPrice = () => {
		setProductCard([...productCard].sort((a, b) => b.price - a.price))
		setFindMatch([...findMatch].sort((a, b) => b.price - a.price))
	}

	const handleSortLowPrice = () => {
		setProductCard([...productCard].sort((a, b) => a.price - b.price))
		setFindMatch([...findMatch].sort((a, b) => a.price - b.price))
	}

	const routeLocation = useLocation()
	const isProductsRoute = routeLocation.pathname === '/products'

	if (isFilterBar || isProductsRoute)
		return (
			<div className="filter-container">
				<div className="flex-container">
					<p className="filter">Filter</p>
					<label className="filter-label" onClick={toggleName}>
						<p className="name">Namn</p>
						<img className="arrow" src="/images/arrow.png" alt="dropdown menu" />
						{isNameVisible && <div className="sort-name">
							<div className="sort-name-high">
								<p className="sort-name-p" onClick={handleSortHighName}>A-Ö</p>
								</div>
							<div className="sort-name-low">
								<p className="sort-name-p" onClick={handleSortLowName}>Ö-A</p>
							</div>
						</div>}
					</label>
					<label className="filter-label" onClick={togglePrice}>
						<p className="price">Pris</p>
						<img className="arrow" src="/images/arrow.png" alt="dropdown menu" />
						{isPriceVisible && <div className="sort-price">
							<div className="sort-price-low">
								<p className="sort-price-p" onClick={handleSortLowPrice}>Stigande</p>
							</div>
							<div className="sort-price-high">
								<p className="sort-price-p" onClick={handleSortHighPrice}>Fallande</p>
							</div>
						</div>}
					</label>
				</div>
			</div>
		)
}
export default FilterBar