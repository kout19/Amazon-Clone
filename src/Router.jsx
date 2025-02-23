import React from 'react';  
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Landing from './Pages/Landing/Landing';
import Sginup from './Pages/Auth/Signup';
import Payment from './Pages/Payment/Payment';
import Cart from './Pages/Cart/Cart';
import Order from './Pages/Orders/Order';
import Results from './Pages/Results/Results';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import ProtectedRoute from './components/ProtectedRout/ProtectedRoute.jsx';

const stripePromise = loadStripe('pk_test_51QtjckR35vE1EoVoc02aSwQlmyq2zAWIGWnPL2JydDyaR3ll8qN76LSdP7QMi0MuyJZToN3BDEZQOG0NdBZTqSX600s40WLsFJ');
const Routing = () => {
  return (
    <Router> 
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/auth' element={<Sginup />} />
        <Route path='/payment' element=
        {
       <ProtectedRoute 
       msg={"You must login first"} 
       redirect={"/payment"} >
        <Elements stripe={stripePromise}>
        <Payment />
        </Elements>
        </ProtectedRoute>
        }
         />
        <Route path='/cart' element={<Cart />} />
        <Route path='/orders' 
        element={
          <ProtectedRoute 
          msg={"You must login first to see your orders"}
          redirect={"/orders"}>
        <Order />
        </ProtectedRoute>
      } />
        <Route path='/products/:productId' element={<ProductDetail/>} />
        <Route path='/catagory/:catagoryName' element={<Results/>} />
      </Routes>
    </Router>
  );
}
export default Routing;