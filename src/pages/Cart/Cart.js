import { useEffect, useState } from "react";
import Header from "../../components/Shared/Header/Header";
import CartItem from "../CartItem/CartItem";

function Cart() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    let cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      cartItems = JSON.parse(cartItems);
      console.log(cartItems);
      setItems(cartItems);
    }
  }, []);

  return (
    <div>
      <Header />

      <div>
        {items.map((i) => (
          <CartItem item={i} />
        ))}
      </div>
    </div>
  );
}

export default Cart;
