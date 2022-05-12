import React from "react";
import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";

const Inventory = () => {
  const [products, setProducts] = useProducts();

  return (
    <div>
      <div
        className="my-10 flex justify-center
      "
      >
        <button class=" btn btn-wide btn-secondary text-white ">
          Add Item
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th />
              <th>Name</th>
              <th>Quantity</th>
              <th>Favorite Color</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => {
              return (
                <tr>
                  <td></td>
                  <td>{p.name}</td>
                  <td>{p.quantity}</td>
                  <td>Price</td>
                  <td>
                    <button class="btn bg-red-500 text-white ">Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Inventory;
