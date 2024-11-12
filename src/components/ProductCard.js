import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { add, remove } from "../store/cartSlice";
import "./ProductCard.css";

export const ProductCard = ({ product }) => {
  const { id, name, price, image } = product;

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartState.cartList);

  const [itemInCart, setItemInCart] = useState(false);

  useEffect(() => {
    const isInCart = cartItems.find((item) => item.id === id);
    if (isInCart) {
      setItemInCart(true);
    } else {
      setItemInCart(false);
    }
  }, [id, cartItems]);

  return (
    <div className="productCard">
      <img src={image} alt={name} className="" />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {itemInCart ? (
          <button className="remove" onClick={() => dispatch(remove(product))}>
            Remove
          </button>
        ) : (
          <button onClick={() => dispatch(add(product))}>Add To Cart</button>
        )}
      </div>
    </div>
  );
};
