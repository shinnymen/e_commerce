import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import { Products, NavBar, Checkout } from "./components";
import Cart from "./components/Cart/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };
  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);

    setCart(cart);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });

    setCart(cart);
  };

  const handleRemooveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);

    setCart(cart);
  };

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();

    setCart(cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);
  console.log(cart);

  return (
    <Router>
      <div>
        <NavBar totalItems={cart.total_items} />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Products products={products} onAddToCart={handleAddToCart} />
            }
          />
          <Route
            path="/cart"
            exact
            element={
              <Cart
                cart={cart}
                handleUpdateCartQty={handleUpdateCartQty}
                handleRemooveFromCart={handleRemooveFromCart}
                handleEmptyCart={handleEmptyCart}
             />
            }
          />
          <Route path="/checkout"  exact element={<Checkout cart={cart} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
