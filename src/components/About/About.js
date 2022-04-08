import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AboutInfo from '../AboutInfo/AboutInfo';

const About = () => {
    return (
        <Container className='my-3'>
            <Row>
                <Col xs={12} md={4}>
                    <AboutInfo title="Our Starting">
                        See Video
                    </AboutInfo>
                </Col>
                <Col xs={12} md={4}>
                    <AboutInfo title="Our Obstacles">
                        Read Article
                    </AboutInfo>
                </Col>
                <Col xs={12} md={4}>
                    <AboutInfo title="Our Dream">
                        Donate Us
                    </AboutInfo>
                </Col>
            </Row>
        </Container>
    );
};

export default About;