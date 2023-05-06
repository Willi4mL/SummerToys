const ToTop = () => {

	const scrollTop = () => {
        document.documentElement.scrollTop = 0;
    }

	return (
		<button className="to-top" onClick={scrollTop}>Top</button>
	)
}
export default ToTop