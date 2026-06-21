import { useEffect, useState } from "react";
import PRODUCTS from "../../data/products";
import Product from "./Product";

function Shop() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const clock = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      setTime(`${hours} : ${minutes} : ${seconds}`);
    };

    clock();
    const interval = setInterval(clock, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto   mt-5 relative">
      <p
        id="time"
        className="absolute top-2 left-4 font-sans border border-gray-500 px-4 py-2 rounded-xl"
      >{time}</p>
      <h1 className="center mb-10 text-6xl  ">shop</h1>
      <hr className="mb-10 text-gray-400" />
      <div className="grid grid-cols-12 ">
        {PRODUCTS.map((productData) => (
          <Product key={productData.id} data={productData} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
