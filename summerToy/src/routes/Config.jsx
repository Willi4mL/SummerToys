import { createHashRouter } from "react-router-dom";
import Root from "./Root";
import Products from "./Products";
import Cart from "./Cart";
import Admin from "./Admin";

const router = createHashRouter([
	{
		path: '/',
		element: <Root />,

		children: [
			{
				path: '',
				element: <Products />,

				children: [
					{
						path: 'admin',
						element: <Admin />
					},
				],
			},
			{
				path: 'cart',
				element: <Cart />,
			},
			{
				path: '*',
				element: <Products />
			}
		]
	}
])
export { router }