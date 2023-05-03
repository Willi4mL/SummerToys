import { useEffect } from "react"
import { useRecoilState } from "recoil"
import { productState } from "../Atom.js"
import { url, shopId } from "../../scripts/Constant.js"

const Home = () => {
	const [productCard, setProductCard] = useRecoilState(productState)

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
	return (
		<main>
			<div>
				<h1>Home</h1>
				<ul>
					{productCard.map((item) => (
						<li key={item.id}>
							<h3>{item.name}</h3>
							<p>{item.price}</p>
							<img src={item.picture} alt={item.name} />
						</li>
					))}
				</ul>
			</div>
		</main>
	)
}
export default Home