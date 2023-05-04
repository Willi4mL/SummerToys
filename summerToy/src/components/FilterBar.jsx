import { useRecoilState } from "recoil"
import { isBarsState } from "./Atom"
import { useState } from "react"

const FilterBar = () => {
	const [isFilterBar, setFilterBar] = useRecoilState(isBarsState)
	const [isNameVisible, setIsNameVisible] = useState(false)
	const [isPriceVisible, setIsPriceVisible] = useState(false)

	const toggleName = () => {
		setIsNameVisible(!isNameVisible)
	}

	const togglePrice = () => {
		setIsPriceVisible(!isPriceVisible)
	}

	if (isFilterBar)
		return (
			<div className="filter-container">
				<div className="flex-container">
					<p className="filter">Filter</p>
					<label className="filter-label" onClick={toggleName}>
						<p className="name">Namn</p>
						<img className="arrow" src="/images/arrow.png" alt="dropdown menu" />
						{isNameVisible && <div className="sort-name">
							<ul className="sort-name-ul">
								<li className="sort-name-li">A-Ö</li>
								<li className="sort-name-li">Ö-A</li>
							</ul>
						</div>}
					</label>
					<label className="filter-label" onClick={togglePrice}>
						<p className="price">Pris</p>
						<img className="arrow" src="/images/arrow.png" alt="dropdown menu" />
						{isPriceVisible && <div className="sort-price">
							<ul className="sort-price-ul">
								<li className="sort-price-li">Stigande</li>
								<li className="sort-price-li">Fallande</li>
							</ul>
						</div>}
					</label>
				</div>
			</div>
		)
	else {
		<></>
	}
}
export default FilterBar