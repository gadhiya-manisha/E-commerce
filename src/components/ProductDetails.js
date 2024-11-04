import React from 'react';

const ProductDetails = ({ product, addToCart }) => (
  <div className="product-details">
    <img src={product.image} alt={product.title} />
    <h2>{product.title}</h2>
    <p>{product.description}</p>
    <p>${product.price}</p>
    <button onClick={() => addToCart(product)}>Add to Cart</button>
  </div>
);

export default ProductDetails;
