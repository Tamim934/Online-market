import React from "react";
import { useNavigate } from "react-router-dom";
import CartList from "../../components/TamimCatagories/Cart.jsx/CartList";

const Cart = () => {
  const navigate = useNavigate();

  return (
    <div>
      <CartList />
    </div>
  );
};

export default Cart;
