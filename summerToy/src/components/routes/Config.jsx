import { createHashRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./Home";
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
				element: <Home />,
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
				element: <Home />
			}
		]
	}
])
export { router }