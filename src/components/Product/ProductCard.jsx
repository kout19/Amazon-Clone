import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import Rating from '@mui/material/Rating';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import { DataContext } from '../DataProvider/DataProvider';
import classes from './product.module.css';
import { Type } from '../../Utils/action.type';
const ProductCard = ({ product, flex, renderDsc, renderAddBtn }) => {
  const {id, title, image, price, description, rating} = product;
  const [state, dispatch] = useContext(DataContext);
  // console.log(basket);
  // console.log(id);

  const AddToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
        id,title,image,price,description,rating
      }
    });   
  };  

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
        {renderAddBtn &&
          <button className={classes.button} onClick={AddToCart}>
          add to cart
        </button>}
        
      </div>
    </div>
    
  );
}

export default ProductCard;