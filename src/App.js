import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import NotFound from './components/NotFound/NotFound';
import About from './components/About/About';
import Orders from './components/Orders/Orders';
import Inquiry from './components/Inquiry/Inquiry';
import { createContext, useEffect, useState } from 'react';
import { addToDb, getStoredCart } from './utilities/fakedb';
import useServices from './hooks/useServices';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';

export const OrderContext = createContext('order');


function App() {
  const [services] = useServices();

  const [cart,setCart] = useState([]);


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
  },[services])

  return (
    <div className='bg-light'>
      <OrderContext.Provider value={handleBuyButton}>
      <BrowserRouter>
      <Header>
        {cart}
      </Header>
      <Routes>
        <Route path="" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/inquiry" element={<Inquiry></Inquiry>}></Route>
        <Route path="/orders" element={<Orders>
          {cart}
        </Orders>}></Route>

        <Route path="/placeorder" element={<PlaceOrder></PlaceOrder>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>

      </OrderContext.Provider>
      
    </div>
  );
}

export default App;
