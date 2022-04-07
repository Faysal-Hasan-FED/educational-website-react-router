import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
    const [services] = useServices();
    return (
        <Container className='my-3'>
            <div className="text-center">
            <h3>Choose the course <span className="text-success">wisely</span></h3>
            <h3>and get a chance to <span className="text-success">master English</span> </h3>
            </div>
            
            {
                <Row xs={1} md={2} className="g-4">

                {
                    services.map(service => <Service 
                        key={service.key}
                        service={service}>
                            <Button variant="outline-dark" size="sm">Order This Course</Button>
                        </Service>)
                }

                </Row>
            }
            
        </Container>
    );
};

export default Services;