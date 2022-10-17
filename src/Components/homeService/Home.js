import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import logo from '../images/gym.jpg'
import './Home.css';
import Cart from '../Cart/Cart';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() =>{
      fetch('products.json')
      .then(res => res.json())
      .then(data =>setProducts(data));
  },[])

  const handleAddToCart =(product) =>{
    console.log(product.time)
}

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
       handleAddToCart={handleAddToCart}
       ></Product>)
      }
     </div>
    </div>
     <div className="home-info">
        <Cart></Cart>
     </div>
   </div>
  );
};

export default Home;<h1>hello project</h1>