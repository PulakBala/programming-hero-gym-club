import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Home.css'

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() =>{
      fetch('products.json')
      .then(res => res.json())
      .then(data =>setProducts(data));
  },[])
  return (
    <div className='home'>
      <div className="home-details">
       {
        products.map(product => <Product 
        key={product.id}
        product={product}
        ></Product>)
       }
      </div>
      <div className="home-info">
          <h1>home cart</h1>
      </div>
    </div>
  );
};

export default Home;<h1>hello project</h1>