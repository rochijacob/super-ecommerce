import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";

import { Products, Navbar } from "./components";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    try {
      const { data } = await commerce.products.list();

      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchCart = async () => {
    try {
      const response = await commerce.cart.retrieve();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <Navbar />
      <Products products={products} />
    </div>
  );
};

export default App;
