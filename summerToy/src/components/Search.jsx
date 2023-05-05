import { useRecoilState } from "recoil"
import { isBarsState } from "./Atom"
import { searchState } from "./Atom"

const Search = () => {
	const [isFilterBar, setFilterBar] = useRecoilState(isBarsState)
	const [search, setSearch] = useRecoilState(searchState)

	const handleSearch = (event) => {
		setSearch(event.target.value.toLowerCase())
	}

	if (isFilterBar) {
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
	else {
		return (
			<></>
		)
	}
}
export default Search