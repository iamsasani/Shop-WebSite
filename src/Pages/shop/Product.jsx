import { useContext, useState } from "react";
import { ShopContext } from "../../context/shopContext";
function Product(props) {
  const { id, productImage, productName, price } = props.data;

  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);
  return (
    <div className="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3  center flex flex-col gap-5 mr-10 mb-10 ">
      <img className="aspect-square mb-10" src={productImage} />
      <h1 className="text-2xl ">{productName}</h1>
      <p className="text-gray-400 text-lg font-sans">price : {price}$</p>
      <div>
        <button onClick={()=>addToCart(id)} className="text-lg py-2 px-4 rounded-xl cursor-pointer bg-cyan-600 text-white ">
          +
        </button>
        <span className="mx-3 font-sans">
          {cartItems?.filter((row) => row.id === id)[0]?.count}
        </span>
        <button onClick={() => removeFromCart(id)} className="text-lg py-2 px-4 rounded-xl cursor-pointer bg-cyan-600 text-white ">
          -
        </button>
      </div>
    </div>
  );
}

export default Product;
