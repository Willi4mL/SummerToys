import { useState } from "react"
import { productDetailState, cartState, cartCountOneState } from "../components/Atom"
import { useRecoilState } from "recoil"

const ProductDetail = () => {
	const [selectedProduct, setSelectedProduct] = useRecoilState(productDetailState)
	const { name, price, picture, description } = selectedProduct
	const [cart, setCart] = useRecoilState(cartState)
	const [countOne, setCountOne] = useRecoilState(cartCountOneState)
	
	const handleToCart = (item) => {
		const isProductInCart = cart.some((product) => product.id === item.id)
		if(!isProductInCart) {
			console.log('Send to cart', item)
			setCart([...cart, selectedProduct])
		} 
	}

	return (
		<div className="view-detail">
			<div className="detail-flex">
				<div className="product-detail-container">
					<div className="card-img--position">
						<img className="card-img card-img-detail" src={picture} alt={name} />
					</div>
					<div className="card-text--position">
						<h3 className="card-name">{name}</h3>
						<p className="card-price">{price} kr</p>
						<p className="card-description">{description}</p>
						<button className="add-cart-button" onClick={() => handleToCart(selectedProduct)}>Lägg i varukorg</button>  
					</div>
				</div>
			</div>
		</div>
	)
}
export default ProductDetail