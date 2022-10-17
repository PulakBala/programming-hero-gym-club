import React from 'react';
import './Product.css'

const Product = (props) => {
    const{name,picture,time} = props.product;

    return (
       
        <div>
            
            <div className='product'>
            <div className="product-info">
            <img src={picture} alt=""></img>
            <h4>{name}</h4>
            <h4>time required : {time}s</h4>
            </div>
            <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'>
                <p>Add To List</p>
            </button>
        </div>
        </div>
    );
};

export default Product;