import React, { useContext } from 'react';
import {  Button, Card, Col, Row } from 'react-bootstrap';
import { OrderContext } from '../../App';

const Service = props => {
    const {name,fullName,img,price1,price2} = props.service;
   
    return (
     
          <Col xs={12} md={6} className='my-3'>
        <Card className='h-100 my-3'>
          <Card.Img className='h-50' variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Title>{fullName}</Card.Title>
            <Card.Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque ea deserunt magnam laborum exercitationem omnis harum obcaecati ab quisquam facilis.
            </Card.Text>
            <h3 className='text-success'>Get only at <small className='text-decoration-line-through text-danger'>{price1}$</small> {price2}$ </h3>
            
            <p onClick={()=>props.handleBuyButton(props.service)}>{props.children} </p>
          </Card.Body>
        </Card>
      </Col>
      
        
    )
};

export default Service;