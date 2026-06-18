import { useContext, useState } from "react";
import { ShopContext } from "../../context/shopContext";
import { counter } from "@fortawesome/fontawesome-svg-core";
function Product(props) {
  const { id, productImage, productName, price } = props.data;

  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);
  return (
    <div className="productCart ">
      <img className="productImg" src={productImage} />
      <h1 className="text-2xl ">{productName}</h1>
      <p className="productPrice">price : {price}$</p>
      <div>
        <button onClick={() => addToCart(id)} className="productBtn">
          +
        </button>
        <span className="mx-3 font-sans">
          {cartItems?.filter((row) => row.id === id)[0]?.count}
        </span>
        <button onClick={() => removeFromCart(id)} className="productBtn">
          -
        </button>
      </div>
    </div>
  );
}

export default Product;
