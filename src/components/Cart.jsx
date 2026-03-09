import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
// 
function Cart() {

  const cartItems = useSelector(state => state.cart.cartItems);

  const total = cartItems.reduce(
    (sum,item)=> sum + item.price * item.quantity,
    0
  );

  return (
    <div>

      <h2>Your Cart</h2>

      {cartItems.length === 0 && <p>Cart is empty</p>}

      {cartItems.map(item => (
        <CartItem key={item.id} item={item} />
      ))}

      <h3>Total: ${total}</h3>

      {cartItems.length > 0 && (
        <Link to="/checkout">
          <button>Checkout</button>
        </Link>
      )}

    </div>
  );
}

export default Cart;