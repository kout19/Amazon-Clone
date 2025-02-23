import React, {useContext,useState} from 'react';  
import Layout from '../../components/Layout/Layout';
import {ClipLoader} from 'react-spinners';
import CurrencyFormate from '../../components/CurrencyFormat/CurrencyFormat';
import classes from './payment.module.css';
import {DataContext} from '../../components/DataProvider/DataProvider';
import ProductCard from '../../components/Product/ProductCard';
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
import {axiosInstance} from '../../API/axios'; 
import {db} from '../../Utils/firbase';
import {Type} from '../../Utils/action.type';
import {collection, doc, setDoc} from "firebase/firestore";
import {useNavigate} from 'react-router-dom';
const Payment = () => {
const [{basket,user},dispatch] = useContext(DataContext);
const totalItem=basket?.reduce((acc,item)=>{
    return acc+item.amount},0);
    const stripe = useStripe();
    const elements = useElements();
    const navigate=useNavigate();
    // const [succeeded, setSucceeded] = useState(false);
    const [error, setError] = useState(null);
    const [proccessing, setProccessing] =useState(false);
    const handleChange=(e)=>{
      e?.error?.message ? setError(e.error.message) : setError("");
    }
   const totalPrice = basket?.reduce((acc, item) =>
     acc + item.price * item.amount, 0);
const handlePayment = async (e) => {
    e.preventDefault();
    //1. connect to backend function
    try{
    setProccessing(true);
    const response= await axiosInstance({
        method:"post",
        url:`/payments/create?total=${totalPrice*100}`,
    });
    // console.log(response.data);
    //Setting Up confirmation( Client side)
    const confirmation = await stripe.confirmCardPayment(
        response.data.client_secret,{
            payment_method:{
                card:elements.getElement(CardElement),
            }
        });
        // console.log(confirmation);
        // console.log(db);
        await setDoc(doc(collection(db, "users", user?.uid, "orders")), {
            basket: basket,
            amount: confirmation.paymentIntent.amount,
            created: confirmation.paymentIntent.created,
          });
        dispatch({type:Type.EMPTY_BASKET});
        setProccessing(false);
        navigate("/orders", {state:{ msg: "You have placed new order"}});
    }catch(error){
        console.log(error);
        setProccessing(false);
    }
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
                    <button type ="submit">
                        { proccessing ?(
                            <div className={classes.loading}>
                            <ClipLoader color={"#fff"} size={15}/>
                            <p>Proccessing</p>
                            </div>
                        ): "Pay Now"
                       }
                    </button>
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