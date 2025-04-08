import React, { useState, useEffect } from "react";

function IphoneSimp() {
  const [products, setProducts] = useState([]); // State to store products

  // Fetch Data from API on Component Mount
  useEffect(() => {
    fetch("https://applebackend-ndus.onrender.com/iphonesData")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data); // Store fetched data in state
      })
      .catch((error) => console.error("Error: Unable to fetch!", error));
  }, []);

  return (
    <div className="container">
      <h1 className="text-center mt-5 pt-5">iPhone Products</h1>
      <p className="h2 mb-2 text-center">The best for the brightest.</p>

      {/* Loop Through Each Product */}
      {products.map((product) => (
        <div key={product.product_id} className="card my-3 p-3">
          {/* Product Image */}
          <img
            src={product.product_img}
            alt={product.product_name}
            className="img-fluid"
            style={{ maxWidth: "200px" }}
          />

          {/* Product Details */}
          <h3>{product.product_name}</h3>
          <p>
            <strong>Description:</strong> {product.product_brief_description}
          </p>
          <p>
            <strong>Price:</strong> {product.starting_price}
          </p>
          <p>
            <strong>Price Range:</strong> {product.price_range}
          </p>

          {/* Buy Now Link */}
          <a
            href={product.product_link}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy Now
          </a>
        </div>
      ))}
    </div>
  );
}

export default IphoneSimp;

