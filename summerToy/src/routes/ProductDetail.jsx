import { useRecoilState } from "recoil"
import { productDetailState } from "../components/Atom"

const ProductDetail = () => {

	const [isDetailVisible, setIsDetailVisible] = useRecoilState(productDetailState)

	return (
		<>
		{isDetailVisible && <div>
			<h1>Test ProductDetail page</h1>
		</div>}
		</>
	)
}
export default ProductDetail