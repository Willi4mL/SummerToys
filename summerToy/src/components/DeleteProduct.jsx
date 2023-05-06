import { useRecoilState } from "recoil"
import { findMatchState, isBarsState, productState } from "./Atom"
import { NavLink } from "react-router-dom"
import { useCallback } from "react"

const DeleteProduct = ({ productListUpdated }) => {
	const [productCard, setProductCard] = useRecoilState(productState)
	const [findMatch, setFindMatch] = useRecoilState(findMatchState)
	const [isFilterBar, setFilterBar] = useRecoilState(isBarsState)

	const handleDelete = useCallback((id) => {
		const updatedProductList = productCard.filter((product) => product.id !== id)
		setProductCard(updatedProductList)
	},[productCard, setProductCard])

	return (
		<main>
		<div className="centering-grid">
			<ul className="card-grid">
				{findMatch.length > 0 ? (
					findMatch.map((item) => (
						<NavLink to={'/products/'}><li className="card-container" key={item.id}>
							<div className="card-img--position">
								<img className="card-img" src={item.picture} alt={item.name} />
								<button className="delete-card" onClick={() => handleDelete(item.id)}>Ta bort</button>
							</div>
							<div className="card-text--position">
								<h3 className="card-name">{item.name}</h3>
								<p className="card-price">{item.price} kr</p>
							</div>
						</li></NavLink>
					))
				) : (
					productCard.map((item) => (
						<NavLink to={'/products/'}><li className="card-container" key={item.id}>
							<div className="card-img--position">
								<img className="card-img" src={item.picture} alt={item.name} />
								<button className="delete-card" onClick={() => handleDelete(item.id)}>Ta bort</button>
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
export default DeleteProduct