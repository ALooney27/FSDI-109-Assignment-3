import { useState } from "react";
import DataContext from "./dataContext";

function GlobalState(props) {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({ id: 123123, name: "Anthony" });

  function addToCart(product) {
    let copy = [...cart];
    copy.push(product);
    setCart(copy);
  }

  function removeFromCart() {}

  return (
    <DataContext.Provider
      value={{
        cart: cart,
        user: user,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}

export default GlobalState;
