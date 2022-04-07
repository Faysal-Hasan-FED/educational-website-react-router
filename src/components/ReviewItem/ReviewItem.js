import React from 'react';
import { Button, Container } from 'react-bootstrap';


const ReviewItem = props => {
    const {name,quantity,price2} = props.item;
    return (
        <Container>
            <div className="border m-2 shadow rounded p-3">
            <h2>{name}</h2>
            <p>Quanitity: {quantity}</p>
            <p>Price: {price2}</p>
            <Button onClick={()=>props.handleRemoveButton(props.item.key)} variant='outline-danger'>Remove This</Button>
            </div>
            
        </Container>
    );
};

export default ReviewItem;