import React from 'react';
import picture from '../images/412.jpg'
import './Cart.css'

const Cart = () => {
    return (
        <div>
            <div className="information">
               <div className='personal-info'>
                    <div>
                        <img src={picture} alt="" />
                    </div>
                    <div className='name'>
                        <h3>Pulak  Bala</h3>
                    </div>
               </div>
               <div className='personal-details'>
                    <div>
                    <h3>64<small>kg</small></h3>
                    <h6>Weight</h6>
                    </div>
                    <div>
                    <h3>5.6</h3>
                    <h6>Height</h6>
                    </div>
                   <div>
                   <h3>24 <small>yrs</small></h3>
                    <h6>Age</h6>
                   </div>
               </div>
            </div>

            <div className="break-container">
                <h2>Add A Break</h2>
                <div className='break-time'>
                    <h3>10s</h3>
                    <h3>20s</h3>
                    <h3>30s</h3>
                    <h3>40s</h3>
                    <h3>50s</h3>
                </div>
            </div>
        </div>
    );
};

export default Cart;