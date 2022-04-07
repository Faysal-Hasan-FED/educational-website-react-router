import React, { useEffect } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useServices from '../../hooks/useServices';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Service from '../Service/Service';

const Services = () => {
    const [services] = useServices();
    const [cart,setCart] = useCart(services);

    const handleBuyButton = service =>{
        const exists = cart.find(sv => sv.key === service.key);
        let newCart = [];
        if(exists){
          const rest = cart.filter ( sv => sv.key !== service.key);
          exists.quantity = exists.quantity +1;
          newCart = [...rest, service];
        }
        else{
          service.quantity = 1;
          newCart = [...cart,service];
        }
        setCart(newCart);
        addToDb(service.key);
      }
    
    
      useEffect(()=>{
        if(services.length){
            const savedCart = getStoredCart();
            const storedCart = [];
            for(const key in savedCart){
              const addedService = services.find(service => service.key === key);
              if(addedService){
                const quantity = savedCart[key];
                addedService.quantity = quantity;
                storedCart.push(addedService);
              }
            }
            setCart(storedCart);
        }
      },[services]);



    return (
    <Container className='my-3 h-100'>
        <div className="text-center">
          <h3>Choose the course <span className="text-success">wisely</span></h3>
          <h3>and get a chance to <span className="text-success">master English</span> </h3>
        </div>


        <Row xs={2}  className="g-4">
          {
            <Row xs={1} md={1} className="g-4">

              {
                services.map(service => <Service 
                key={service.key}
                service={service}
                handleBuyButton= {handleBuyButton}>
                <Button variant="outline-dark" size="sm">Order This Course</Button>
                </Service>)
                }
            </Row>
          }


          <Cart  cart={cart}>
            <Link to="/orders">
            <Button variant="outline-success">Review Order</Button>
            </Link>
          </Cart>


        </Row>
    </Container>
    );
};

export default Services;