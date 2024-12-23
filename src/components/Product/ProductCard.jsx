import React from 'react';
import Rating from '@mui/material/Rating';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import classes from './product.module.css';
const ProductCard = ({ product }) => {
  return (   
    <div className={classes.card_container}>
    <a href="">
      <img src={product.image} alt={product.title} />
      </a>
      <div>
       
        <h3>{product.title}</h3>
        <div className={classes.rating}>
          <Rating value={product.rating.rate} precision={0.1} />
          <small>{product.rating.count }</small>
        {/* <p>{product.description}</p> */}
        </div>
        <div>
          <CurrencyFormat amount={product.price} />
        </div> 
        <button className={classes.button}>
          add to cart
        </button>
      </div>
    </div>
    
  );
}

export default ProductCard;