import React, { useState, useEffect } from 'react';
import './App.css'

const App = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error fetching products. Please try again later.');
        }
      })
      .then((data) => {
        setProducts(data);
        setError(null);
      })
      .catch((error) => {
        setProducts([]);
        setError(error.message);
      });
  };

  
  return (
    <div>
      <h1 className='hd'>Product List</h1>
      {error ? (
        <p>{error}</p>
      ) : (
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="cardBox">
              <img src={product.image} alt={product.title} className='ig1' />
              <h5>{product.title}</h5>
              <p>Price: ${product.price}</p>
              <div className='btn0'>
              <button className='btn1'  >Buy</button>
              <button className='btn1'>Add to Cart</button>
              </div>
              
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
