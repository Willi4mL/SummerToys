import { useRecoilState } from "recoil"
import { isBarsState } from "./Atom"

const FilterBar = () => {
	const [isFilterBar, setFilterBar] = useRecoilState(isBarsState)

	if(isFilterBar)
	return (
		<div className="filter-container">
			<div className="flex-container">
				<p className="filter">Filter</p>
				<label className="filter-label">
					<p className="name">Namn</p>
					<img className="arrow" src="/images/arrow.png" alt="dropdown menu" />
				</label>
				<label className="filter-label">
					<p className="price">Pris</p>
					<img className="arrow" src="/images/arrow.png" alt="dropdown menu" />
				</label>
			</div>
		</div>
	)
	else {
		<></>
	}
}
export default FilterBar