import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LogIn from "../components/LogIn";
import Search from "../components/Search";
import FilterBar from "../components/FilterBar";
import AddObject from "../components/AddObject";

const Root = () => (
	<>
		<Header />
		<LogIn />
		<Search />
		<FilterBar />
		<AddObject />
		<main>
			<Outlet />
		</main>
	</>
)
export default Root