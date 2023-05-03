import { useRecoilState } from "recoil"
import { isBarsState } from "./Atom"

const Search = () => {
	const [isFilterBar, setFilterBar] = useRecoilState(isBarsState)

	if(isFilterBar){
		return (
			<div className="search-container">
			<input className="search-input" placeholder="Sök"></input>
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