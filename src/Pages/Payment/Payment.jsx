import React, {useContext,useState} from 'react';  
import Layout from '../../components/Layout/Layout';
import CurrencyFormate from '../../components/CurrencyFormat/CurrencyFormat';
import classes from './payment.module.css';
import {DataContext} from '../../components/DataProvider/DataProvider';
import ProductCard from '../../components/Product/ProductCard';
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
 const Payment = () => {
const [{basket,user},dispatch] = useContext(DataContext);
const totalItem=basket?.reduce((acc,item)=>{
    return acc+item.amount},0);
    const stripe = useStripe();
    const elements = useElements();
    const [succeeded, setSucceeded] = useState(false);
    const [error, setError] = useState(null);
    const handleChange=(e)=>{
      e?.error?.message ? setError(e.error.message) : setError("");
    }
   const totalPrice = basket?.reduce((acc, item) =>
     acc + item.price * item.amount, 0);
const handlePayment = async (e) => {
    e.preventDefault();
    //1. connect to backend function
    

     };


    return (
        <Layout>    
        <div className={classes.payment_header}> Checkout ({totalItem}) items</div>
        <section className={classes.payment_container}>
        {/* address */}
        <div className={classes.flex}>
            <h3>Delivery Address</h3>
            <div>
            <p>{user?.email}</p>
            <p>123 React lane</p>
            <p>Los Angeles, CA</p>
        </div>
        </div>
            <hr/>
         {/* product */}
     <div className={classes.flex}>
        <h3>Review items and delivery</h3>
        <div>
         {
          basket?.map((item)=><ProductCard product={item}  flex={true}/>)
          }
        </div>
     </div>
        <hr/>
        {/* card form */}
     <div className={classes.flex}>
        <h3>Payment Methods</h3>
         <div className={classes.payment_card}>
            <div>
                <form onSubmit={handlePayment}>
                { error &&(
                    <p style={{color:"red"}}>{error}</p>
                    )}
                    <CardElement onChange={handleChange}/>
                   <div >
                    <div className={classes.payment_price}>
                    <p style={{display:"flex", gap:"10px"}}>Order Total: <CurrencyFormate amount={totalPrice}/> </p>
                    </div>
                    <button>Buy Now</button>
                   </div>
                </form>
            </div>
         </div>
        </div>
       </section>
        </Layout>
    );
}
export default Payment;