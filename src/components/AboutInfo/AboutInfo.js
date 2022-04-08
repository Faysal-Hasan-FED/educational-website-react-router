import React from 'react';
import { Button, Card } from 'react-bootstrap';

const AboutInfo = props => {
    return (
        
        <Card className=' text-center p-5 shadow '>
            

            <h2>{props.title}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum qui vero exercitationem illum placeat voluptatibus, quibusdam sint at dolorum recusandae esse sit incidunt totam nisi.</p>
            
       
        
        <Button variant='outline-dark'>{props.children}</Button>
       
        
        </Card>
        
    );
};

export default AboutInfo;