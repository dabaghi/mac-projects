import React from "react";
import "./ProductCards.css"

const ProductCards = ({ id, title, price, img })  => {
  return (
    <div className="product-card" id={id}>
      <img src={img} alt="" />
      <span>{title}</span><br />
      <span>{price}</span>
    </div>
  );
}

export default ProductCards;
