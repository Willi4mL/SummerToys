import { createHashRouter } from "react-router-dom";
import Root from "./Root";
import Products from "./Products";
import Cart from "./Cart";
import LoggedIn from "./LoggedIn";
import AddObject from "./AddObject";

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
				path: 'cart',
				element: <Cart />,
			},
			{
				path: 'logged-in',
				element: <LoggedIn />
			},
			{
				path: 'add-object',
				element: <AddObject />,
			},
			{
				path: '*',
				element: <Products />
			}
		]
	}
])
export { router }