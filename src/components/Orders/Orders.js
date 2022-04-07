import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';
import useCart from '../../hooks/useCart';
import useServices from '../../hooks/useServices';

const Orders = props => {
    const [services] = useServices();

    const [cart,setCart] = useCart(services);


    const handleRemoveButton = key =>{
        removeFromDb(key);
        // remove the selecte item
        const newCart = cart.filter (item => item.key !==key);
        setCart(newCart);
    }
    
    return (
    <Container>
       
        <Row>
            <Col xs={12} md={8}>
                {cart.map(item => <ReviewItem handleRemoveButton={handleRemoveButton} key={item.key} item={item}></ReviewItem>)}
            </Col>
            <Col xs={6} md={4}>
                <Cart 
                 cart={cart}></Cart>
            </Col>
        </Row>
    </Container>
    );
};

export default Orders;