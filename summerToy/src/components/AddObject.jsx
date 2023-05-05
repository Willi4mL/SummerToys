import { useEffect, useState } from "react"
import { addPorductFormState, productState } from "./Atom"
import { useRecoilState } from "recoil"

const AddObject = () => {
	const [name, setName] = useState('')
	const [price, setPrice] = useState('')
	const [picture, setPicture] = useState('')
	const [productCard, setProductCard] = useRecoilState(productState)
	const [isAddFormVisivible, setIsAddFormVisible] = useRecoilState(addPorductFormState)

	const newItem = [
		...productCard,
		{
			name,
			price,
			picture,
			id: productCard.length + 1
		}
	]

	const handleName = (e) => {
		setName(e.target.value)
	}

	const handlePrice = (e) => {
		setPrice(e.target.value)
	}

	const handlePicture = (e) => {
		setPicture(e.target.value)
	}

	const handleSubmit = () => {
		setProductCard([...newItem])
		console.log(productCard)
		console.log(newItem)
	}

	useEffect(() => {
		console.log('Efter handleSubmit', productCard)
	}, [productCard])

	if (isAddFormVisivible) {

		return (
			<main>
				<h2 className="add-product-heading">Lägg till produkt</h2>
				<div className="add-product-container">
					<form className="add-form">
						<p className="add-product-name">Namn:</p>
						<input className="add-product-name-input"
							value={name}
							onChange={handleName}>
						</input>
						<p className="add-product-price">Pris:</p>
						<input className="add-product-price-input"
							value={price}
							onChange={handlePrice}>
						</input>
						<p className="add-product-image">Bild:</p>
						<input className="add-product-image-input"
							value={picture}
							onChange={handlePicture}>
						</input>
						<button className="add-product-button"
							onClick={handleSubmit}>Lägg till</button>
						{/* <button className="add-product-button" onClick={onClose}>Avbryt</button> */}
					</form>
				</div>
			</main>
		)
	}
	else {
		<>
		</>
	}
}
export default AddObject  