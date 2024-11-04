import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
//import './ProductList.css';

const ProductList = ({ dispatch }) => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then((response) => {
      setProducts(response.data);
    });
  }, []);

  const itemsPerPage = 10;
  const paginatedProducts = products.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <div className="product-list">
      {paginatedProducts.map((product) => (
        <ProductCard key={product.id} product={product} dispatch={dispatch} />
      ))}

      <footer className="pagination">
        {page > 1 && <button onClick={() => setPage(page - 1)}>Previous</button>}
        {products.length > page * itemsPerPage && (
          <button onClick={() => setPage(page + 1)}>Next</button>
        )}
      </footer>
    </div>
  );
};

export default ProductList;
