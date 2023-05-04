import { products } from "./ProductList.js"
import { shopId, url } from "./Constant.js"

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
	return statusObject
}

async function addAllTheProducts() {
	
	const productInfo = products.map(item => ({
		name: item.name,
		price: item.price,
		picture: item.picture,
		description: item.description,
		shopid: shopId
	}))

	productInfo.forEach(item => {
		addProduct(item)
	})
}

addAllTheProducts()
export { addAllTheProducts }