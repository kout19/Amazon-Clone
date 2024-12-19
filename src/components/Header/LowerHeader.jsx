import React from 'react';
import classes from './header.module.css';
import { IoMenuOutline } from "react-icons/io5";
const LowerHeader = () => {
  return ( 
    <div className={classes.lower_container}>
      <ul>
        <li>
          <IoMenuOutline/>
        <p>All</p>
        </li>
        <li>Today's Deals</li>
        <li>Costomer Service</li>
        <li>Registery</li>
        <li>Gift Cards</li>
        <li>Sell</li>
      </ul>
    </div>
    

   );               

}
export default LowerHeader; 