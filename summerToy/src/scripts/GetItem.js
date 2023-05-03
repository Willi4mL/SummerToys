const url = 'https://forverkliga.se/JavaScript/api/fe/'
const shopId = 1015

async function getProducts() {
	console.log('Getting products...')
	const response = await fetch(url + '?action=get-products&shopid=' + shopId)
	const data = await response.json()
	console.log('Response from API:', data)
}
getProducts()
export { getProducts }