import { useContext } from "react";
import PRODUCTS from "../../data/products";
import { ShopContext } from "../../context/shopContext";
import Product from "../shop/Product";

function Cart() {
  const { cartItems } = useContext(ShopContext);

  return (
    <div className="container mx-auto   mt-5">
      <h1 className="center mb-10 text-6xl  ">Cart</h1>
      <hr className="mb-10 text-gray-400" />
      <div className="grid grid-cols-12 ">
        {PRODUCTS.map((p) => {
          const cartItem = cartItems.find((i) => i.id === p.id);
          if (cartItem && cartItem.count > 0) {
            return <Product key={p.id} data={p} />;
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default Cart;
