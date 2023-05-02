import { Outlet } from "react-router-dom";
import Header from "../Header";
import LogIn from "../LogIn";
import Search from "../Search";
import FilterBar from "../FilterBar";

const Root = () => (
	<>
		<Header />
		<LogIn />
		<Search />
		<FilterBar />
		<main>
			<Outlet />
		</main>
	</>
)
export default Root