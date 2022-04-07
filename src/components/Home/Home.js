import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useServices from '../../hooks/useServices';
import CourseHome from '../CourseHome/CourseHome';
import MyCarosuel from '../MyCarousel/MyCarosuel';



const Home = () => {
    const [services] = useServices();
    return (
        <Container>

            <MyCarosuel></MyCarosuel>

            <h3 className='text-center my-3'>Our Popular Courses</h3>

            {
                services.length &&  <Row xs={1} md={2} className="g-4">

                {
                    services.slice(0,4).map(service => <CourseHome service={service} key={service.key}></CourseHome>)
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