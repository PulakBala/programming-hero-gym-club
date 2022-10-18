
import { useState } from 'react';
import picture from '../images/412.jpg'
import './Cart.css'

const Cart = ({cart}) => {
    let time = 0;
    for(const product of cart) {
        time = time + product.time;
    }

   const [data, setData] = useState(0);

    return (
        <div className='cart'>
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
                    <button onClick={()=> localStorage.setItem('break-time',JSON.stringify(10),setData(10))}>10s</button>
                    <button onClick={()=> localStorage.setItem('break-time',JSON.stringify(20),setData(20))}>20s</button>
                    <button onClick={()=> localStorage.setItem('break-time',JSON.stringify(30),setData(30))}>30s</button>
                    <button onClick={()=> localStorage.setItem('break-time',JSON.stringify(40),setData(40))}>40s</button>
                    <button onClick={()=> localStorage.setItem('break-time',JSON.stringify(50),setData(50))}>50s</button>
                </div>
            </div>

            <div className="exercise-container">
                <h2>Exercise Details</h2>

                <h3 className='exercise-time'>Exercise time <span>{time}</span> seconds</h3>

                <h3 className='break-time-count'>Break time <span>{data}</span> seconds</h3>

                <button className='btn-activity'>Activity Completed</button>
            </div>
        </div>
    );
};

export default Cart;