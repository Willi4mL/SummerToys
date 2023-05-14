import { useRecoilState } from "recoil"
import { cartCountOneState, cartState } from "../components/Atom"
import { useEffect, useState } from "react";

const Cart = () => {
	const [cart, setCart] = useRecoilState(cartState)
	const [countOne, setCountOne] = useRecoilState(cartCountOneState)
	const [total, setTotal] = useState(0)

	const handleDeleteCart = (id) => {
		const updatedCartList = cart.filter((product) => product.id !== id)
		setCart(updatedCartList)
		setCountOne(0)
	}

	const handleAmountInput = (id, e) => {
		const newCount = {...countOne,[id]: e.target.value}
		setCountOne(newCount)
	}

	useEffect(() => {
			const newTotal = cart.reduce((acc, product) => {
				const quantity = countOne[product.id] || 1
				return acc + product.price * quantity
			}, 0)
			setTotal(newTotal)
	},[cart, countOne])

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
									<input type='number' className="cart-amout" value={countOne[product.id] || 1} onChange={(e) => handleAmountInput(product.id, e)}></input>
								</div>
							</div>
						</div>
					</div>
				))
			) : (
				<p className="empty-cart">Kundvagnen är tom</p>
			)}
			<p className="total">Totalsumma: {total} kr</p>
		</main>
	)
}
export default Cart