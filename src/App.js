import React, { useState } from "react";
import { Route } from "react-router-dom";
import { data } from "./data";

// Bileşenler
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

import { ProductContext } from "./contexts/ProductContext";
import { CartContext } from "./contexts/CartContext";
function App() {
  const [products, setProducts] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    console.log("ürünleri ver", products);
    setCart([...cart, item]);
  };
  function removeItem(item) {
    console.log("ver babaa", item);
    const index = cart.indexOf(item);

    if (index !== -1) {
      cart.splice(index, 1);

      console.log(`${item} sepetten kaldırıldı.`);
    }
    setCart([...cart]);
  }

  return (
    <ProductContext.Provider
      value={{ setProducts, products, addItem, removeItem }}
    >
      <CartContext.Provider value={{ cart, setCart }}>
        <div className="App">
          <Navigation />

          {/* Routelar */}
          <main className="content">
            <Route exact path="/">
              <Products />
            </Route>

            <Route path="/cart">
              <ShoppingCart />
            </Route>
          </main>
        </div>
      </CartContext.Provider>
    </ProductContext.Provider>
  );
}

export default App;
