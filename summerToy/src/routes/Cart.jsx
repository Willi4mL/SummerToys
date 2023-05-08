import { useRecoilState } from "recoil"
import { cartState } from "../components/Atom"

const Cart = () => {
	const [cart, setCart] = useRecoilState(cartState)

	const handleDeleteCart = (id) => {
		const updatedCartList = cart.filter((product) => product.id !== id)
		setCart(updatedCartList)
	}

	return (
		<main>
			{cart.length > 0 ? (
				cart.map((product) => (
					<div className="view-cart" key={product.id}>
						<div className="cart-flex">
							<div className="cart-container">
								<img
									className="cart-img"
									src={product.picture}
									alt={product.name}
								/>
								<h3 className="cart-name">{product.name}</h3>
								<button className="delete-cart" onClick={() => handleDeleteCart(product.id)}>Ta bort</button>
								<p className="cart-price">{product.price} kr</p>
								<div className="amount-container">
									<p className="amount-text">Antal: </p>
									<input type='number' className="cart-amout"></input>
								</div>
							</div>
						</div>
					</div>
				))
			) : (
				<p className="empty-cart">Kundvagnen är tom</p>
			)}
		</main>
	);
};
export default Cart