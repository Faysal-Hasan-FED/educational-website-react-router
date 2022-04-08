import React from 'react';
import { Carousel } from 'react-bootstrap';
import first from '../../images/e-learning.webp';
import second from '../../images/group.webp';
import third from '../../images/online.webp';


const MyCarosuel = () => {
    const imageStyle={height:'500px'}
    return (
        <Carousel className='my-3'>
  <Carousel.Item>
    <img
    style={imageStyle}
      className="d-block w-100"
      src ={first}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className='bg-info text-dark p-3 rounded shadow'>Start E-Learning</h3>
      <p className='bg-info text-dark p-3 rounded shadow '>This is a great opportunity for you to start E-Learning</p>
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
      <h3 className='bg-dark text-white p-3 rounded shadow'>Ask Your Teacher</h3>
      <p className='bg-dark text-white p-3 rounded shadow'>You can ask your teacher anytime in online and it will surely help you in the long run</p>
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
      <h3 className='bg-secondary text-dark p-3 rounded shadow'>Learn from Internet</h3>
      <p className='bg-secondary text-dark p-3 rounded shadow'>This will increase your ability to find some answer from the Internet</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
};

export default MyCarosuel;