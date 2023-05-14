import { createHashRouter } from "react-router-dom";
import Root from "./Root";
import Products from "./Products";
import Cart from "./Cart";
import Admin from "./Admin";
import ProductDetail from "./ProductDetail";

const router = createHashRouter([
	{
		path: '/',
		element: <Root />,

		children: [
			{
				path: '',
				element: <Products />,
			},
			{
				path: '/admin',
				element: <Admin />,
			},
			{
				path: '/admin/products',
				element: <Admin />
			},
			{
				path: '/products/:id',
				element: <ProductDetail />
			},
			{
				path: '/cart',
				element: <Cart />
			},
			{
				path: '*',
				element: <Products />
			}
		]
	}
])
export { router }