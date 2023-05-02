import { useRecoilState } from "recoil"
import { isAddObjectState } from "./Atom"

const Search = () => {
	const [isAddObject, setIsAddObject] = useRecoilState(isAddObjectState)

	if(isAddObject){
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