import { useDispatch } from "react-redux";
import { setSearch } from "../redux/cartSlice";
// 
function Header(){

const dispatch = useDispatch();

return(

<div>

<h2>ShoppyGlobe</h2>

<input
placeholder="Search product"
onChange={(e)=>dispatch(setSearch(e.target.value))}
/>

</div>

)

}

export default Header