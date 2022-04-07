import React, { useContext } from 'react';
import {  Button, Card, Col } from 'react-bootstrap';
import { OrderContext } from '../../App';

const Service = props => {
    const {name,fullName,img,price1,price2} = props.service;
    const handleOrderButton = useContext(OrderContext);
    return (
        <Col>
        <Card className='h-100'>
          <Card.Img className='h-50' variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Title>{fullName}</Card.Title>
            <Card.Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque ea deserunt magnam laborum exercitationem omnis harum obcaecati ab quisquam facilis.
            </Card.Text>
            <h3 className='text-success'>Get only at <small className='text-decoration-line-through text-danger'>{price1}$</small> {price2}$ </h3>
            
            <p onClick={()=>handleOrderButton(props.service)}>{props.children} </p>
          </Card.Body>
        </Card>
      </Col>
    )
};

export default Service;