import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import img from '../../images/notFound.jpg';


const NotFound = () => {
    const navigate = useNavigate();

    const handleButton = () =>{
    navigate('/home');
    }
    return (
        <div className='text-center'>
            <div className='my-5'>
            <img src={img} alt="" />
            </div>
            <Button onClick={handleButton} variant='outline-dark'>Go Home</Button>
        </div>
    );
};

export default NotFound;