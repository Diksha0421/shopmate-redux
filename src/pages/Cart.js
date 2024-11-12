import { useSelector } from "react-redux";

import { CartCard } from "../components";
import { UseTitle } from "../hooks/UseTitle";

export const Cart = () => {
  const cartProducts = useSelector((state) => state.cartState.cartList);
  const total = useSelector((state) => state.cartState.total);
  UseTitle("Cart");

  return (
    <main>
      <section className="cart">
        <h1>
          Cart Items: {cartProducts.length} /{total}
        </h1>
        {cartProducts.map((product) => (
          <CartCard key={cartProducts.id} product={product} />
        ))}
      </section>
    </main>
  );
};
