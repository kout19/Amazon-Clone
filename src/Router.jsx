import React from 'react';  
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Landing from './Pages/Landing/Landing';
import Sginup from './Pages/Auth/Signup';
import Payment from './Pages/Payment/Payment';
import Cart from './Pages/Cart/Cart';
import Order from './Pages/Orders/Order';
const Routing = () => {
  return (
    <Router> 
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/auth' element={<Sginup />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/orders' element={<Order />} />
      </Routes>
    </Router>
    
  );
}
export default Routing;