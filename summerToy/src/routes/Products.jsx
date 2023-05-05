import { useEffect, useState } from "react"
import { useRecoilState } from "recoil"
import { productState } from "../components/Atom.js"
import { url, shopId } from "../scripts/Constant.js"
import { searchState } from "../components/Atom.js"
import { addPorductFormState } from "../components/Atom.js"

const Products = () => {
	const [productCard, setProductCard] = useRecoilState(productState)
	const [search, setSearch] = useRecoilState(searchState)
	const [findMatch, setFindMatch] = useState([])
	const [isAddFormVisivible, setIsAddFormVisible] = useRecoilState(addPorductFormState)

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

	if (isAddFormVisivible != true) {

		return (
			<main>
				<div className="centering-grid">
					<ul className="card-grid">
						{findMatch.length > 0 ? (
							findMatch.map((item) => (
								<li className="card-container" key={item.id}>
									<div className="card-img--position">
										<img className="card-img" src={item.picture} alt={item.name} />
									</div>
									<div className="card-text--position">
										<h3 className="card-name">{item.name}</h3>
										<p className="card-price">{item.price} kr</p>
									</div>
								</li>
							))
						) : (
							productCard.map((item) => (
								<li className="card-container" key={item.id}>
									<div className="card-img--position">
										<img className="card-img" src={item.picture} alt={item.name} />
									</div>
									<div className="card-text--position">
										<h3 className="card-name">{item.name}</h3>
										<p className="card-price">{item.price} kr</p>
									</div>
								</li>
							))
						)
						}
					</ul>
				</div>
			</main>
		)
	}
	else {
		<>
		</>
	}
}
export default Products