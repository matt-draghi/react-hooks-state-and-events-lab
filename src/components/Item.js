import React, {useState} from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false)
  const itemClass = inCart ? "in-cart" : ""
  const cartButton = inCart ? "remove" : "add"

  const handleCart = (e) => {
    setInCart(!inCart)
  }

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={cartButton} onClick={handleCart}>{inCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
