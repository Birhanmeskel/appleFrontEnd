import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Four04 from "../Pages/Four04";

function ProductPages() {
  const [product, setProduct] = useState(null);
  const { productID } = useParams();

  useEffect(() => {
    fetch("https://applebackend-ndus.onrender.com/iphonesData")
      .then((res) => res.json())
      .then((data) => {
        const singleProduct = data.find((item) => item.product_id == productID);
        // const singleProduct = data.filter(
        //   (item) => item.product_id == productID
        // )[0];

        setProduct(singleProduct);
      })
      .catch((err) => console.error("Error: Unable to fetch!", err));
  }, [productID]);
  // console.log(product);

  if (!product) {
    return <Four04 />;
  }

  return (
    <div className="container">
      {/* header */}
      <div className="mt-5 pt-5 text-center">
        <div className="h1 font-weight-bold">{product.product_name}</div>
        <div className="h2 mb-2">{product.product_brief_description}</div>
      </div>
      {/* image and discription */}
      <div className="row  text-center">
        <div className="col-sm-12 col-md-6 my-auto">
          <div>Starting at {product.starting_price}</div>
          <div>{product.price_range}</div>
          <div>{product.product_description}</div>
        </div>
        <div className="col-sm-12 col-md-6">
          <img src={product.product_img} alt={product.product_name} />
        </div>
      </div>
    </div>
  );
}

export default ProductPages;
