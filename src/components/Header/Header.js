import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import { SlLocationPin } from 'react-icons/sl';
import { BsSearch } from 'react-icons/bs';
import { BiCart } from 'react-icons/bi';
import LowerHeader from './LowerHeader';
import classes from './header.module.css';
import { DataContext } from '../DataProvider/DataProvider';
const Header = () => {
  const [{basket}, dispatch] = useContext(DataContext);
  return(
    <section className={classes.fixed}>
      <section className={classes.header_container}>
        <div className={classes.logo_container}>
          {/* logo */}
          <Link to='/'>
            <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon-logo" />
          </Link>
          <span>
            {/* icon */}
          </span>
          <div className={classes.delivery}>
          <span>
           <SlLocationPin/>
            </span>
            <div>
            <p>Delivery to</p>
              <span>Ethiopia</span>
              </div>
          </div>
        </div>
        
        <div className={classes.search}>
          {/* search */}
          <select name='' id=''>
            <option>All</option>
            <option>Electronics</option>
            <option>Books</option>
            <option>Home</option>
            <option>Beauty</option>
          </select>
          <input type="text" name='' id='' placeholder='Search product' />
          <BsSearch size={ 25} />
        </div>
        <div className={classes.order_container}>
          {/* right header */}
          <Link to=''
           className={classes.language_container}>
          <img src="https://cdn.britannica.com/33/4833-050-F6E415FE/Flag-United-States-of-America.jpg"
            alt="flag of united states" />
         
          <select>
          <option value="">EN</option>
            </select>

          </Link>
          
          {/* right header */}
          <Link to=''>
            <div>
          <p>Hello, Sign in</p>
              <span>Account & Lists</span>
              </div>
          </Link>
          {/* Orders */}
          <Link to='/orders'>
            <p>Returns</p>  
            <span>& Orders</span>
          </Link>
          {/* Cart */}
          <Link to="/cart" className={classes.cart}>

            <BiCart size={35}/>
            {/* icon */}
            <span>{basket.length}</span>
          </Link>  
        </div>
      </section>
       <LowerHeader/>
    </section>
  )
}
export default Header;