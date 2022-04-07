import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
    const [services] = useServices();
    return (
        <Container>
            {
                services.length &&  <Row xs={1} md={2} className="g-4">

                {
                    services.map(service => <Service 
                        key={service.key}
                        service={service}></Service>)
                }

                </Row>
            }
            
        </Container>
    );
};

export default Services;