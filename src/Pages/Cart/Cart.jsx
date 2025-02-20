import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import { DataContext } from '../../components/DataProvider/DataProvider';
import ProductCard from '../../components/Product/ProductCard';
import CurrencyFormat from '../../components/CurrencyFormat/CurrencyFormat';
import classes from './cart.module.css';
import { Type } from '../../Utils/action.type';
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
const Cart = () => {
const [{ basket, user }, dispatch] = useContext(DataContext);
const increment = (item) => {
dispatch({
type: Type.ADD_TO_BASKET,
item
});
};
const decrement = (id) => {
dispatch({
type: Type.REMOVE_FROM_BASKET,
id
});
};

return (
<Layout>
<section className={classes.container}>
 <div className={classes.cart_container}>
        <h2>Hello</h2>
        <h3>Your shopping basket</h3>
            <hr />
            {basket?.length === 0 ? (<p>Opps ! Your basket is empty</p>) : (
                basket?.map((item) => {
                    return<section className={classes.cart_item}>
                    <ProductCard
                        product={item}
                        flex={true}
                        renderDsc={true}
                        renderAddBtn={false}
                    />
                    <div className={classes.btn_container}>
                        <button className={classes.btn}
                        onClick={()=>increment(item)}>
                            <IoIosArrowUp />
                        </button>
                        <span>{item.amount}</span>
                        <button  className={classes.btn}
                        onClick={()=>decrement(item.id)}>
                            <IoIosArrowDown />
                        </button>
                    </div>
                    </section>
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
 <Link to="/payment"> Continue to checkout</Link>          
    </div>
 )}
</section>
</Layout>
);
} 
export default Cart;