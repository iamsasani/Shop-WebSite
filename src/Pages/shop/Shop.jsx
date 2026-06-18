
import { useState } from "react";
import PRODUCTS from "../../data/products"
import Product from "./Product"


function Shop() {



  return (
    <div className="container mx-auto   mt-5">
      <h1 className="center mb-10 text-6xl  ">shop</h1>
      <hr className="mb-10 text-gray-400"/>
      <div className="grid grid-cols-12 ">
        {PRODUCTS.map((productData) => (
          <Product key={productData.id}  data={productData} />
        ))}
      </div>
    </div>
  );
}

export default Shop;