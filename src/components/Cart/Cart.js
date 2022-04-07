import React from 'react';
import { Button } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import { clearTheCart } from '../../utilities/fakedb';

const Cart = props => {
    const {cart} = props;
    
    let total = 0;
    let quantity = 0;
    for(const item of cart){
        quantity = quantity + item.quantity;
        total = (total + item.price2*item.quantity);
    }

    const navigate = useNavigate();
    const handlePlaceOrder = () =>{
        navigate('/placeorder');

        // clear the db 
        clearTheCart();
    }
    
    return (
        <div>
            <h2>Order Summary</h2>
            <h4>Total Ordered: {quantity}</h4>
            <p>Total: {total}$</p>

           { cart.length ? <Button onClick={handlePlaceOrder} variant="outline-success">Place Order</Button> : <h3>Please Order Something</h3>}
        </div>
    );
};

export default Cart;