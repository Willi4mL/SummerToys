import { useRecoilState } from "recoil"
import { findMatchState, productState } from "./Atom"
import { NavLink } from "react-router-dom"
import { useCallback } from "react"

const DeleteProduct = () => {
	const [productCard, setProductCard] = useRecoilState(productState)
	const [findMatch, setFindMatch] = useRecoilState(findMatchState)

	const handleDelete = useCallback((id) => {
		const updatedProductList = productCard.filter((product) => product.id !== id)
		setProductCard(updatedProductList)

		const updatedFindList = findMatch.filter((product) => product.id !== id)
		setFindMatch(updatedFindList)
	}, [productCard, findMatch])

	return (
		<main>
			<div className="centering-grid">
				<ul className="card-grid">
					{findMatch.length > 0 ? (
						findMatch.map((item) => (
							<NavLink to={'/products/'} key={item.id}><li className="card-container">
								<div className="card-img--position">
									<img className="card-img" src={item.picture} alt={item.name} />
								</div>
								<div className="card-text--position">
									<h3 className="card-name">{item.name}</h3>
									<p className="card-price">{item.price} kr</p>
								</div>
								<button className="delete-card" onClick={() => handleDelete(item.id)}>Ta bort</button>
							</li></NavLink>
						))
					) : (
						productCard.map((item) => (
							<NavLink to={'/products/'} key={item.id}><li className="card-container">
								<div className="card-img--position">
									<img className="card-img" src={item.picture} alt={item.name} />
								</div>
								<div className="card-text--position">
									<h3 className="card-name">{item.name}</h3>
									<p className="card-price">{item.price} kr</p>
								</div>
								<button className="delete-card" onClick={() => handleDelete(item.id)}>Ta bort</button>
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