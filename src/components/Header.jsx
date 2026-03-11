import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/cartSlice";

function Header() {

  const dispatch = useDispatch();

  return (
    <div className="header">

      <h2>ShoppyGlobe</h2>

      <input
        type="text"
        placeholder="Search product"
        onChange={(e)=>dispatch(setSearch(e.target.value))}
      />

      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
      </nav>

    </div>
  );
}

export default Header;