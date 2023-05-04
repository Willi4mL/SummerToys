import { useEffect } from "react"
import { useRecoilState } from "recoil"
import { productState } from "../components/Atom.js"
import { url, shopId } from "../scripts/Constant.js"
import { searchState } from "../components/Atom.js"

const Home = () => {
	let [productCard, setProductCard] = useRecoilState(productState)
	const [search, setSearch] = useRecoilState(searchState)

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
		fetchItem()
	}, [])

	const findMatch = productCard?.filter((product) =>
		product.name.includes(search)) || []

		console.log('Inside useEfect productCard:', productCard)
		console.log('Inside useEffect findmatch', findMatch);

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
						<li>Vänta på objekt...</li>
					)
					}
				</ul>
			</div>
		</main>
	)
}
export default Home