const ToTop = () => {
	const scrollTop = () => {
		document.documentElement.scrollTop = 0;
	}
	return (
		<button className="to-top" onClick={scrollTop}>^</button>
	)
}
export default ToTop