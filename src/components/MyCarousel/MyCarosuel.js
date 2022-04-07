import React from 'react';
import { Carousel } from 'react-bootstrap';
import first from '../../images/e-learning.webp';
import second from '../../images/group.webp';
import third from '../../images/online.webp';


const MyCarosuel = () => {
    const imageStyle={height:'500px',objectFit:'cover'}
    return (
        <Carousel className='my-3'>
  <Carousel.Item>
    <img
    style={imageStyle}
      className="d-block w-100 "
      src ={first}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className='text-warning'>Start E-Learning</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    style={imageStyle}
      className="d-block w-100"
      src ={second}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3 className='text-dark'>Ask Your Teacher</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    style={imageStyle}
      className="d-block w-100"
      src = {third}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 className='text-danger'>Learn from Internet</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
};

export default MyCarosuel;