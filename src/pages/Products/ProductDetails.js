import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProducts from "../../hooks/useProducts";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const [products, setProducts] = useProducts();
  const { productId } = useParams();
  useEffect(() => {
    const url = `http://localhost:5000/product/${productId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [products]);

  const { name, img, supplier, description, price, quantity, sold } = product;

  const handleDelivered = (e) => {
    e.preventDefault();

    const quantityValue = +e.target.quantity.value;
    if (quantityValue >= 1) {
      const quantity = +e.target.quantity.value - 1;
      const soldValue = +e.target.sold.value + 1;
      const updatedProduct = {
        quantity,
        sold: soldValue,
      };

      // !Send data for update Delivered
      const url = `http://localhost:5000/product/${productId}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      })
        .then((response) => response.json())
        .then((data) => {
          const updateQuantity = products.find((p) => p._id === productId);
          setProduct(updateQuantity);
        });
    } else {
    }
  };

  const handleQuantity = (e) => {
    e.preventDefault();
    const adding = e.target.addQuantity.value;
    const previousQuantity = product.quantity;
    const quantity = +previousQuantity + +adding;
    const updatedProduct = { name, img, supplier, description, quantity };

    // !Send data for update Sold
    const url = `http://localhost:5000/product/${productId}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((response) => response.json())
      .then((data) => {
        const updateQuantity = products.find((p) => p._id === productId);
        setProduct(updateQuantity);
        e.target.addQuantity.value = "";
      });
  };

  return (
    <div className="flex h-screen">
      <div className="card bg-base-100 shadow-xl m-auto">
        <figure>
          <img className="w-[20%]" src={img} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          {product.quantity === 0 ? "Out of Stock" : "In Stock"}{" "}
          <form onSubmit={handleDelivered}>
            <input
              readOnly
              className="w-25 border-0"
              disabled
              type="number"
              name="quantity"
              value={quantity}
              id=""
            />
            <input
              type="submit"
              value="Delivered"
              className="btn btn-secondary mx-3"
            ></input>
            <small className=" ms-2">
              {" "}
              <strong>Sold:</strong>{" "}
            </small>
            <input
              className="w-25 border-0"
              disabled
              type="number"
              name="sold"
              value={sold}
            />
          </form>
          <small>
            <strong>Add To Stock :</strong>
          </small>
          <form onSubmit={handleQuantity}>
            <input
              placeholder="Add Quantity"
              min="1"
              step="1"
              required
              type="number"
              name="addQuantity"
              class="input input-bordered input-primary w-[full] max-w-xs"
            />

            <input
              type="submit"
              value="Add Product Quantity"
              className="btn btn-primary mt-2 d-block text-white lg:mx-5"
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
