import React, { useReducer, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../App.css';
import Cart from './Cart';
import ProductList from '../pages/ProductList';
import ProductDetailView from '../pages/ProductDetailView';

// Reducer function for managing cart state
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.find((item) => item.id === action.product.id);
      if (existingItem) {
        return state.map((item) =>
          item.id === action.product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...state, { ...action.product, quantity: 1 }];
    case 'REMOVE_FROM_CART':
      return state.filter((item) => item.id !== action.id);
    case 'LOAD_CART':
      return action.cart || [];
    default:
      return state;
  }
};

const App = () => {
  const [cart, dispatch] = useReducer(cartReducer, [], () => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <Router>
      <div className="app">
        <header className="header">
          <h1>Product Store</h1>
          <Cart cart={cart} dispatch={dispatch} />
        </header>
        <Routes>
          <Route path="/" element={<ProductList dispatch={dispatch} />} />
          <Route path="/product/:id" element={<ProductDetailView dispatch={dispatch} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

