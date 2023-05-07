import { productDetailState } from "../components/Atom"
import { useRecoilState } from "recoil"

const ProductDetail = () => {
	const [selectedProduct, setSelectedProduct] = useRecoilState(productDetailState)
	const { id, name, price, picture, description } = selectedProduct

	return (
		<>
			<div>
				<h1>Test ProductDetail page</h1>
				<div className="card-img--position">
					<img className="card-img" src={picture} alt={name} />
				</div>
				<div className="card-text--position">
					<h3 className="card-name">{name}</h3>
					<p className="card-price">{price} kr</p>
					<p className="card-description">{description}</p>
				</div>
			</div>
		</>
	)
}
export default ProductDetail