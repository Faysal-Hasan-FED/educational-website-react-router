import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useServices from '../../hooks/useServices';
import MyCarosuel from '../MyCarousel/MyCarosuel';
import Service from '../Service/Service';


const Home = () => {
    const [services] = useServices();
    return (
        <Container>

            <MyCarosuel></MyCarosuel>

            <h3 className='text-center my-3'>Our Popular Courses</h3>

            {
                services.length &&  <Row xs={1} md={2} className="g-4">

                {
                    services.slice(0,4).map(service => <Service 
                        key={service.key}
                        service={service}>
                            <Link to="/inquiry">
                                <Button>Get Information</Button>
                            </Link>
                        </Service>)
                }

                </Row>
            }

            <div className="text-center my-3">
            <Link to="/services">
                <Button variant="outline-dark">See all courses</Button>
            </Link>
            </div>

        </Container>
    );
};

export default Home;