import { useEffect, useState } from 'react';
import { getStoredCart } from '../utilities/fakedb';


const useCart = services =>{
    const [cart,setCart] = useState([]);
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
    return [cart, setCart];
}

export default useCart;