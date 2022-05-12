import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useProducts();

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h2 className="text-center font-bold text-4xl mb-2">Products</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 px-10">
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
      <div className="w-full mb-10 flex justify-center items-center ">
        {" "}
        <Link to={`/inventory`} class="text-white btn btn-wide btn-secondary">
          Manage Inventory
        </Link>
      </div>
    </div>
  );
};

export default Products;
