import React from 'react';
import {Link} from 'react-router-dom';
import Rating from '@mui/material/Rating';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import classes from './product.module.css';
const ProductCard = ({ product, flex,renderDsc }) => {
  return (   
    <div className={`${classes.card_container} ${flex ?classes.product_flexed :''} `}>
    <Link to={`/products/${product.id}`}>
      <img src={product.image} alt={product.title} />
      </Link>
      <div>
       
        <h3>{product.title}</h3>
        {renderDsc &&(
          <div style={{ maxWidth: "750px" }}>{product.description}</div>
          )}
        <div className={classes.rating}>
          <Rating value={product.rating?.rate} precision={0.1} />
          <small>{product.rating?.count }</small>
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