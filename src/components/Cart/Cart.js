import React from 'react';
import { Button } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import { clearTheCart } from '../../utilities/fakedb';

const Cart = props => {
    const {cart} = props;
    console.log(props)
    
    let total = 0;
    let quantity = 0;
    for(const item of cart){
        quantity = quantity + item.quantity;
        total = (total + item.price2*item.quantity);
    }

    const fixedStyle={
        position: 'fixed',
        top: '35%',
        left: '55%'
    }
    
    return (
        <div className='card p-2 shadow' style={fixedStyle} >
            <h2>Order Summary</h2>
            <h4>Total Ordered: {quantity}</h4>
            <p>Total: {total}$</p>

            <p>{props.children}</p>
        </div>
    );
};

export default Cart;