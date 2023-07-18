import "./cart.css";
import { useContext } from "react";
import DataContext from "../store/dataContext";

function Cart() {
  const cart = useContext(DataContext).cart;

  function getNumProducts() {
    let sum = 0;

    for (let index = 0; index < cart.length; index++) {
      const prod = cart[index];
      sum += prod.quantity;
    }

    return sum;
  }

  function getTotal() {}

  return (
    <div className="cart page">
      <h1>Proceed to checkout</h1>
      <h5>You have {getNumProducts()} products in the cart</h5>

      <div className="parent">
        <section className="list">List of products here</section>
        <section className="side">Side Panel</section>
        <h4>Total</h4>
        <h5>{getTotal()}</h5>
      </div>
    </div>
  );
}

export default Cart;
