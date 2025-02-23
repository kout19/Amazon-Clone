import React,{useContext, useEffect, useState} from 'react';
import Layout from '../../components/Layout/Layout';
import {DataContext} from '../../components/DataProvider/DataProvider';
import {useNavigate} from 'react-router-dom';
import {db} from '../../Utils/firbase';
import ProductCard from '../../components/Product/ProductCard';
import {collection, getDocs,query, where} from 'firebase/firestore';
import classes from './order.module.css';
const Order = () => {
    const [{user, basket},dispatch] = useContext(DataContext);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            const getOrders = async () => {
                try {
                    const q = query(collection(db, "users", user.uid, "orders"));
                    const querySnapshot = await getDocs(q);
                    console.log("Query Snapshot:", querySnapshot);
    
                    let tempOrders = [];
                    querySnapshot.forEach((doc) => {
                        tempOrders.push({ id: doc.id, ...doc.data() }); // Include order ID
                    });
    
                    setOrders(tempOrders);
                } catch (error) {
                    console.error("Error fetching orders:", error);
                }
            };
    
            getOrders();
        }
    }, [user]); // ✅ Include user as a dependency
    
    // ✅ Log orders when they update
    useEffect(() => {
        console.log("Updated orders:", orders);
    }, [orders]); // ✅ Watch orders state
    
    return (
    <Layout>
        <section className={classes.order}>
            <div className={classes.order_container}>
                <h2>Your orders</h2>
                {orders?.lenth === 0 && <p style={{padding:"20px"}}>No orders yet</p>}
                <div>
                    { orders?.map((eachOrder)=>
                    {
                        // console.log(eachOrder);
                       return(

                        <div className={classes.order_body}>
                             <p>Order ID : {eachOrder?.id}</p>
                            {
                                eachOrder?.basket?.map(item => {
                                    // console.log(item);
                                   return <ProductCard 
                                    flex={true}
                                     product={item} 
                                     key={item.id}
                                     />
                                })
                            }
                            <hr/>
                        </div>
                       )
                    })}
                  </div>
            </div>
        </section>
    </Layout>
    );
}
export default Order;