import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProductDetailView.css';

const ProductDetailView = ({ dispatch }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
      setProduct(response.data);
    });
  }, [id]);

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', product });
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetailView;
