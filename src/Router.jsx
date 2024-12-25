import React from 'react';  
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Landing from './Pages/Landing/Landing';
import Sginup from './Pages/Auth/Signup';
import Payment from './Pages/Payment/Payment';
import Cart from './Pages/Cart/Cart';
import Order from './Pages/Orders/Order';
import Results from './Pages/Results/Results';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
const Routing = () => {
  return (
    <Router> 
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/auth' element={<Sginup />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/orders' element={<Order />} />
        <Route path='/products/:productId' element={<ProductDetail/>} />
        <Route path='/catagory/:catagoryName' element={<Results/>} />
      </Routes>
    </Router>
    
  );
}
export default Routing;