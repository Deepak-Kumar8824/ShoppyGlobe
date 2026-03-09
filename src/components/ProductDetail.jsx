import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function ProductDetail() {

  const { id } = useParams();
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);

  useEffect(() => {

    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));

  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div>

      <img src={product.thumbnail} width="200" />

      <h2>{product.title}</h2>

      <p>{product.description}</p>

      <h3>${product.price}</h3>

      <button
        onClick={() => dispatch(addToCart(product))}
      >
        Add to Cart
      </button>

    </div>
  );
}

export default ProductDetail;