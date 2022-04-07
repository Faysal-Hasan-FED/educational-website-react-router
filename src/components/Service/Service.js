import React from 'react';
import { Card, Col, Figure } from 'react-bootstrap';

const Service = props => {
    const {name,fullName,img,price1,price2} = props.service;
    console.log(props.service)
    return (
        <Col>
        <Card className='h-100'>
          <Card.Img className='h-50' variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Title>{fullName}</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit longer.
            </Card.Text>
            <h3>Get only at <small className='text-decoration-line-through'>{price1}</small> {price2} </h3>
          </Card.Body>
        </Card>
      </Col>
    )
};

export default Service;