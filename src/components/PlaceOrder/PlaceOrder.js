import React from 'react';
import img from '../../images/download.png';

const PlaceOrder = () => {
    return (
        <div className='text-center my-3'>
            <h1>Order Done</h1>
            <img src={img} alt="" />
        </div>
    );
};

export default PlaceOrder;