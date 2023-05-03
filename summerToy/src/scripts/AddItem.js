import { products } from "./ProductList.js"

const url = 'https://forverkliga.se/JavaScript/api/fe/'

async function addProduct(oneProduct) {
	console.log('Adding product...')

	const options = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(oneProduct)
	}
	const response = await fetch(url + '?action=add-product', options)
	const statusObject = await response.json()
	console.log('Response from API:', statusObject)
}
async function addAllTheProducts() {
	products.forEach(product => {
		addProduct(product)
	})
}

// addAllTheProducts()
export { addAllTheProducts }