import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import { DataContext } from '../../components/DataProvider/DataProvider';
import ProductCard from '../../components/Product/ProductCard';
import CurrencyFormat from '../../components/CurrencyFormat/CurrencyFormat';
import classes from './cart.module.css';
const Cart = () => {
const [{ basket, user }, dispatch] = useContext(DataContext);

return (
<Layout>
<section className={classes.container}>
 <div className={classes.cart_container}>
        <h2>Hello</h2>
        <h3>Your shopping basket</h3>
            <hr />
            {basket?.length === 0 ? (<p>Opps ! Your basket is empty</p>) : (
                basket?.map((item) => {
                    return <ProductCard
                        product={item}
                        flex={true}
                        renderDsc={true}
                        renderAddBtn={false}
                    />
                }))
            }
        </div>
 { basket?.length !==0 &&(
     <div className={classes.subtotal}>
        <div>
        <p> Subtotal({basket?.length} Items)</p>
            <CurrencyFormat amount={basket?.reduce((acc, item) => acc + item.price * item.amount, 0)}
            />
    )
    </div>
    <span>
        <input type="checkbox" />
        <small>This order contains a gift</small>
    </span>
 <Link to="/payments"> Continue to checkout</Link>          
    </div>
 )}
</section>
</Layout>
);
} 
export default Cart;