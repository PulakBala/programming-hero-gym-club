import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import logo from '../images/gym.jpg'
import './Home.css';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() =>{
      fetch('products.json')
      .then(res => res.json())
      .then(data =>setProducts(data));
  },[])
  return (
    <div className='home'> 
    <div className="name-header">
      <div className="club-name">
        <div className="logo-picture">
             <img src={logo} alt="" />
        </div>
         <div className="logo-name">
          
              <h1>PROGRAMMING HERO GYM CLUB</h1>
         </div>
        
      </div>
      <h2 className='exercise'>Select today's exercise</h2>
    <div className="home-details">
      
      {
       products.map(product => <Product 
       key={product.id}
       product={product}
       ></Product>)
      }
     </div>
    </div>
     <div className="home-info">
         <h1>home cart</h1>
     </div>
   </div>
  );
};

export default Home;<h1>hello project</h1>