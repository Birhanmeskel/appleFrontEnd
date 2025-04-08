import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Iphone() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://applebackend-ndus.onrender.com/iphonesData")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch(() => console.log("Error: unable to fetch!"));
  }, []);

  let flip = true;

  return (
    <div className="container">
      {/* header */}
      <div className="mt-5 pt-5 text-center">
        <h3 className="font-weight-bold">iphones </h3>
        <p className="h2 mb-2">The best for the brightest.</p>
      </div>

      {products?.map((singledata) => {
        let order1 = 1;
        let order2 = 2;

        if (flip) {
          order1 = 2;
          order2 = 1;
        }

        flip = !flip;

        return (
          <div
            key={singledata.product_id}
            className="row text-center"
          >
            {/* images */}
            <div className={`col-sm-12 col-md-6 order-md-${order1}`}>
              <img src={singledata.product_img} alt={singledata.product_name} />
            </div>
            {/* description */}
            <div className={`col-sm-12 col-md-6 order-md-${order2} my-auto`}>
              <div className="h1 font-weight-bold">
                {singledata.product_name}
              </div>
              <div>{singledata.product_brief_description}</div>
              <div>starting at {singledata.starting_price}</div>
              <div>{singledata.price_range}</div>
              {/* learn more link */}
              <div>
                <ul className="list-unstyled ">
                  <li>
                    <Link to={`/iphone/${singledata.product_id}`}>
                      Learn more <i className="fa-solid fa-angle-right"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Iphone;
