import { useDispatch } from "react-redux";

import { remove } from "../store/cartSlice";
import "./CartCard.css";

export const CartCard = ({ product }) => {
  const dispatch = useDispatch();

  const { name, image, price } = product;
  return (
    <div className="cartCard">
      <img src={image} alt={image} />
      <p className="productName">{name}</p>
      <p className="productPrice">${price}</p>
      <button onClick={() => dispatch(remove(product))}>Remove</button>
    </div>
  );
};
