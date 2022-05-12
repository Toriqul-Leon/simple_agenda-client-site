import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AddItem = () => {
  const handleAddPost = (e) => {
    e.preventDefault();
    const productName = e.target.productName.value;
    const price = e.target.price.value;
    const img = e.target.img.value;
    const quantity = e.target.quantity.value;
    const supplier = e.target.supplier.value;
    const description = e.target.description.value;

    const newProduct = {
      name: productName,
      description,
      price,
      img,
      quantity,
      supplier,
      sold: 0,
    };

    // !Send Data to the server
    const url = `http://localhost:5000/products`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        e.target.productName.value = "";
        e.target.price.value = "";
        e.target.img.value = "";
        e.target.quantity.value = "";
        e.target.supplier.value = "";
        e.target.description.value = "";
      });

    toast("Product Added!");
  };
  return (
    <div>
      <h1 className="text-center text-accent font-bold text-3xl my-2">
        Add Item
      </h1>
      <form onSubmit={handleAddPost} className="flex flex-col px-5">
        <input
          className="my-1 p-2 border"
          required
          type="text"
          name="productName"
          placeholder="Product Name"
        />
        <input
          className="my-1 p-2 border"
          required
          type="number"
          name="price"
          placeholder="Price"
        />
        <input
          className="my-1 p-2 border"
          required
          type="text"
          name="img"
          placeholder="Image URL"
        />
        <input
          className="my-1 p-2 border"
          required
          type="number"
          name="quantity"
          placeholder="Quantity"
        />
        <input
          className="my-1 p-2 border"
          required
          type="text"
          name="supplier"
          placeholder="Supplier"
        />
        <textarea
          className="my-1 p-3 border"
          required
          type="text"
          name="description"
          placeholder="Description"
        />

        <input
          className="w-50 mx-auto p-2 fw-bold btn  mt-2 btn-secondary border text-white"
          type="submit"
          value="Add Product"
        />
      </form>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default AddItem;
