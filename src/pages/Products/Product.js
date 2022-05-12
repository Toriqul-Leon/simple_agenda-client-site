import React from "react";

const Product = ({ product }) => {
  const { name, description, price, img, supplier, quantity } = product;
  return (
    <>
      {" "}
      <section className="mb-10">
        <div class="card lg:max-w-sm bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img src={img} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">{name}</h2>
            <p>{description.slice(0, 50)}...</p>
            <h4>
              Available: <strong>{quantity}</strong>{" "}
            </h4>
            <h6>
              <small>
                Price: <strong> {price}</strong>{" "}
              </small>
            </h6>
            <div class="card-actions">
              <button class="btn btn-primary text-white">Manage Product</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
