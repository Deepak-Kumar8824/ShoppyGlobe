import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import useProducts from "../hooks/useProducts";

function ProductList() {

  const { products } = useProducts();

  const search = useSelector(state => state.cart.search);

  const filteredProducts = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );
// 
  return (

    <div className="product-list">

      <h2>Products</h2>

      {/* THIS IS IMPORTANT */}
      <div className="products">

        {filteredProducts.map(product => (
          <ProductItem
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </div>

  );
}

export default ProductList;