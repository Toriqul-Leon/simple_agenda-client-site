import React from "react";
import { confirm } from "react-confirm-box";
import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";

const Inventory = () => {
  const [products, setProducts] = useProducts();

  const handleRemoveItem = async (productId) => {
    const result = await confirm("Are you really sure?");
    if (result) {
      const url = `https://fast-ridge-50132.herokuapp.com/product/${productId}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const productsLeft = products.filter(
            (product) => product._id !== productId
          );
          setProducts(productsLeft);
        });
    }
  };

  return (
    <div>
      <div
        className="my-10 flex justify-center
      "
      >
        <Link
          className="btn btn-secondary mx-auto d-block my-3 py-3 text-white"
          to={`/addItem`}
        >
          Add New Item
        </Link>
      </div>
      <div className="overflow-x-auto mb-10">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th />
              <th>Name</th>
              <th>Quantity</th>
              <th>Supplier</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => {
              return (
                <tr>
                  <td></td>
                  <td>{p.name}</td>
                  <td>{p.quantity}</td>
                  <td>
                    {" "}
                    <strong>{p.supplier}</strong>{" "}
                  </td>
                  <td>{p.price}</td>
                  <td>
                    <button
                      onClick={() => handleRemoveItem(p._id)}
                      class="btn bg-red-500 text-white "
                    >
                      Delete
                    </button>
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
