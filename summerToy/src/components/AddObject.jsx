import { useEffect, useState } from "react"
import { addPorductFormState, productState, findMatchState } from "./Atom"
import { useRecoilState } from "recoil"
import { useLocation } from "react-router-dom"

const AddObject = () => {
	const [name, setName] = useState('')
	const [price, setPrice] = useState('')
	const [picture, setPicture] = useState('')
	const [description, setDescripton] = useState('')
	const [productCard, setProductCard] = useRecoilState(productState)
	const [isAddFormVisivible, setIsAddFormVisible] = useRecoilState(addPorductFormState)
	const [findMatch, setFindMatch] = useRecoilState(findMatchState)

	const newItem = [
		...productCard,
		{
			name,
			price,
			picture,
			description,
			id: productCard.length + 1
		},
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

	const handleDescription = (e) => {
		setDescripton(e.target.value)
	}

	const handleSubmit = () => {
		setProductCard(newItem)
		setFindMatch(newItem)
		console.log(productCard)
		console.log(newItem)
	}

	useEffect(() => {
		console.log('Efter handleSubmit', productCard)
	}, [productCard])

	const routeLocation = useLocation()
	const isProductsRoute = routeLocation.pathname === '/products'

	if (isAddFormVisivible && !isProductsRoute) {
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
							type="number"
							value={price}
							onChange={handlePrice}>
						</input>
						<p className="add-product-image">Bild:</p>
						<input className="add-product-image-input"
							value={picture}
							onChange={handlePicture}>
						</input>
						<p className="add-product-description">Description:</p>
						<textarea className="add-product-description-input"
							value={description}
							onChange={handleDescription}>
						</textarea>

						<button className="add-product-button"
							onClick={handleSubmit}>Lägg till</button>
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