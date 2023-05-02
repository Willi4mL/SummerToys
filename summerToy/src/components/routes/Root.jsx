import { Outlet } from "react-router-dom";
import Header from "../Header";
import LogIn from "../LogIn";

const Root = () => (
	<>
		<Header />
		<LogIn />
		<main>
			<Outlet />
		</main>
	</>
)
export default Root