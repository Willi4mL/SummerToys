import { useEffect, useState } from "react"
import { addPorductFormState, productState, findMatchState } from "./Atom"
import { useRecoilState } from "recoil"
import { useLocation } from "react-router-dom"
import { validateName, validUrl } from "./Validation"

const AddObject = () => {
	const [name, setName] = useState('')
	const [price, setPrice] = useState('')
	const [picture, setPicture] = useState('')
	const [description, setDescripton] = useState('')
	const [invalidAddName, setInvalidAddName] = useState(false)
	const [invalidAddPicture, setInvalidAddPicture] = useState(false)
	const [emptyNameInput, setEmptyNameInput] = useState(false)
	const [emptypPriceInput, setEmptyPriceInput] = useState(false)
	const [emptyDescriptionInput, setEmptyDescriptionInput] = useState(false)
	const [emptyImgInput, setEmptyImgInput] = useState(false)
	const [productCard, setProductCard] = useRecoilState(productState)
	const [isAddFormVisivible, setIsAddFormVisible] = useRecoilState(addPorductFormState)
	const [findMatch, setFindMatch] = useRecoilState(findMatchState)
	const [isFailedAdd, setIsFailedAdd] = useState(false)

	const [isValidName, notValidName] = validateName(name)
	const validClassName = invalidAddName ? isValidName ? 'valid' : 'invalid' : ''

	const [isValidImg, notValidImg] = validUrl(picture)
	const validClassImg = invalidAddPicture ? isValidImg ? 'valid' : 'invalid' : ''

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
		if (e.target.value === '') {
			setEmptyNameInput(true)
		} else {
			setEmptyNameInput(false)
		}
	}

	const handlePrice = (e) => {
		setPrice(e.target.value)
		if (!e.target.value) {
			setEmptyPriceInput(true)
		}
	}

	const handlePicture = (e) => {
		setPicture(e.target.value)
		setInvalidAddPicture(isValidImg)
		if (e.target.value === '') {
			setEmptyImgInput(true)
		} else {
			setEmptyImgInput(false)
		}
	}

	const handleDescription = (e) => {
		setDescripton(e.target.value)
		if (e.target.value === '') {
			setEmptyDescriptionInput(true)
		}
		else {
			setEmptyDescriptionInput(false)
		}
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		if (name && price && picture && description) {
			setProductCard(newItem)
			setFindMatch(newItem)
			setName('')
			setPicture('')
			setPrice('')
			setDescripton('')
			setIsFailedAdd(false)
		}
		else {
			setIsFailedAdd(true)
		}
	}

	const routeLocation = useLocation()
	const isProductsRoute = routeLocation.pathname === '/products'

	if (isAddFormVisivible && !isProductsRoute) {
		return (
			<main>
				<h2 className="add-product-heading">Lägg till produkt</h2>
				<div className="add-product-container">
					<form className="add-form">
						<p className="add-product-name">Namn:</p>
						<div className="name-container">
							<input className='add-product-name-input'
								value={name}
								onChange={handleName}
								onBlur={() => setInvalidAddName(!isValidName)}>
							</input>
							<p className='invalid-message'>
								{invalidAddName ? notValidName : ''}
							</p>
						</div>

						<p className="add-product-price">Pris:</p>
						<div className="price-container">
							<input className="add-product-price-input"
								type="number"
								value={price}
								onChange={handlePrice}>
							</input>
							{emptypPriceInput && !price && <p className="invalid-message">Vänligen fyll i priset.</p>}
						</div>

						<p className="add-product-image">Bild:</p>
						<div className="img-container">
							<input className="add-product-image-input"
								placeholder="https://..."
								value={picture}
								onChange={handlePicture}
								onBlur={() => setInvalidAddPicture(!isValidImg)}>
							</input>
							<p className="invalid-message">
								{invalidAddPicture ? notValidImg : ''}
							</p>
						</div>

						<p className="add-product-description">Beskrivning:</p>
						<div className="description-container">
							<textarea className="add-product-description-input"
								value={description}
								onChange={handleDescription}>
							</textarea>
							{emptyDescriptionInput && !description && <p className='invalid-message'>Vänligen fyll i en beskrivningen </p>}
						</div>

						<div className="add-button-container">
							<button className="add-product-button"
								onClick={handleSubmit}>Lägg till</button>
							{isFailedAdd && <p className="fail-to-add">Alla fälten måste vara ifyllda</p>}
						</div>

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