const AddObject = () => (
	<main>
		<h2 className="add-product-heading">Lägg till produkt</h2>
		<div className="add-product-container">
			<form className="add-form">
				<p className="add-product-name">Namn:</p>
				<input className="add-product-name-input"></input>
				<p className="add-product-price">Pris:</p>
				<input className="add-product-price-input"></input>
				<p className="add-product-image">Bild:</p>
				<input className="add-product-image-input"></input>
				<button className="add-product-button">Lägg till</button>
			</form>
		</div>
	</main>
)
export default AddObject