import { createHashRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./Home";
import Cart from "./Cart";

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
				path:'cart',
				element: <Cart />,
			},
			{
				path: '*',
				element: <Home />
			}
		]
	}
])
export { router }