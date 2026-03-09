import React from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

function Checkout(){
//
const dispatch = useDispatch()
const navigate = useNavigate()

const handleOrder = () => {

alert("Order placed")

dispatch(clearCart())

navigate("/")

}

return(

<div className="checkout">

<h2>Checkout</h2>

<input placeholder="Full Name"/>

<input placeholder="Address"/>

<input placeholder="Phone"/>

<button onClick={handleOrder}>
Place Order
</button>

</div>

)

}

export default Checkout