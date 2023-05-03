// import { addAllTheProducts } from "../../scripts/AddItem"
import { getProducts } from "../../scripts/GetItem.js"
import { useEffect } from "react"

const Home = () => {

	useEffect(() => {
		// addAllTheProducts()
		getProducts()
	},[])
	return (
		<main>
			<div>
				<h1>Home</h1>
			</div>
		</main>
	)
}
export default Home