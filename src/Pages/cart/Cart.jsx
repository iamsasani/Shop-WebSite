import { useContext } from "react";
import PRODUCTS from "../../data/products";
import { ShopContext } from "../../context/shopContext";
import Product from "../shop/Product";

function Cart() {
  const { cartItems } = useContext(ShopContext);

  const cartProducts = PRODUCTS.filter((p) =>
    cartItems.some((i) => i.id === p.id && i.count > 0)
  );

  return (
    <div className="container mx-auto mt-5">
      <h1 className="center mb-10 text-6xl">Cart</h1>
      <hr className="mb-10 text-gray-400" />

      {cartProducts.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-4 mt-20 text-gray-400">
          <span className="text-6xl">🛒</span>
          <p className="text-2xl">    Your shopping cart is empty</p>
        </div>
      ) : (
        <div className="grid grid-cols-12">
          {cartProducts.map((p) => (
            <Product key={p.id} data={p} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;