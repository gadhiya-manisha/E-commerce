import React from 'react';

const Cart = ({ cart, dispatch }) => {
  const totalCost = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length > 0 ? (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <h3>{item.title}</h3>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ${item.price * item.quantity}</p>
            <button onClick={() => dispatch({ type: 'REMOVE_FROM_CART', id: item.id })}>
              Remove
            </button>
          </div>
        ))
      ) : (
        <p>Your cart is empty</p>
      )}
      <p>Total: ${totalCost.toFixed(2)}</p>
    </div>
  );
};

export default Cart;
