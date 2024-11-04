import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../ProductCard.module.css';

const ProductCard = ({ product, dispatch }) => (
  <div className={styles.card}>
    <Link to={`/product/${product.id}`} className={styles.link}>
      <img src={product.image} alt={product.title} className={styles.image} />
      <h2 className={styles.title}>{product.title}</h2>
    </Link>
    <p className={styles.price}>${product.price}</p>
    <button
      onClick={() => dispatch({ type: 'ADD_TO_CART', product })}
      className={styles.button}
    >
      Add to Cart
    </button>
  </div>
);

export default ProductCard;
