import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useServices from '../../hooks/useServices';
import MyCarosuel from '../MyCarousel/MyCarosuel';
import Service from '../Service/Service';


const Home = () => {
    const [services] = useServices();
    return (
        <Container>
        
            <h2>This is home</h2>

            <MyCarosuel></MyCarosuel>

            <h3 className='text-center my-3'>Our Services</h3>

            {
                services.length &&  <Row xs={1} md={2} className="g-4">

                {
                    services.slice(0,4).map(service => <Service 
                        key={service.key}
                        service={service}></Service>)
                }

                </Row>
            }

           
  

        </Container>
    );
};

export default Home;