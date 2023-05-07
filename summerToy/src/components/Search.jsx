import { useRecoilState } from "recoil"
import { isBarsState } from "./Atom"
import { searchState } from "./Atom"
import { useLocation } from "react-router-dom"

const Search = () => {
	const [isFilterBar, setFilterBar] = useRecoilState(isBarsState)
	const [search, setSearch] = useRecoilState(searchState)

	const handleSearch = (event) => {
		setSearch(event.target.value)
	}

	const routeLocation = useLocation()
	const isProductsRoute = routeLocation.pathname === '/products'

	if (isFilterBar || isProductsRoute) {
		return (
			<div className="search-container">
				<input className="search-input"
					type="text"
					placeholder="Sök"
					value={search}
					onChange={handleSearch}
				></input>
			</div>
		)
	}
}
export default Search