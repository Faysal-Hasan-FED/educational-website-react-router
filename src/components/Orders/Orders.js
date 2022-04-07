import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import {  clearTheCart, removeFromDb } from '../../utilities/fakedb';
import useCart from '../../hooks/useCart';
import useServices from '../../hooks/useServices';
import { Link } from 'react-router-dom';

const Orders = props => {
    const [services] = useServices();

    const [cart,setCart] = useCart(services);


    const handleRemoveButton = key =>{
        removeFromDb(key);
        // remove the selecte item
        const newCart = cart.filter (item => item.key !==key);
        setCart(newCart);
    }

    const removeCart = () =>{
        setCart([]);
        clearTheCart();
    }

    return (
    <Container>
       
        <Row>
            <Col xs={6} >
                {cart.map(item => <ReviewItem handleRemoveButton={handleRemoveButton} key={item.key} item={item}></ReviewItem>)}
            </Col>
            <Col xs={6} >
                <Cart 
                removeCart={removeCart}
                 cart={cart}>
                     <Link to="/placeorder">
                     <Button onClick={removeCart} variant="outline-success">Place Order</Button>
                     </Link>
                 </Cart>
            </Col>
        </Row>
    </Container>
    );
};

export default Orders;