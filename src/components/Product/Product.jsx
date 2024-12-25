import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import classes from './product.module.css';
import axios from 'axios';
const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((res) => {
        setProducts(res.data);
        // console.log(res.data);
      }).catch((error) => {
        console.log(error);
      });
  }, []);
  return(
    <div className={classes.products_container}>
      {products && products.map((singleProduct) => (
        <ProductCard
          key={singleProduct.id}
          product={singleProduct}
        />
      ))
      }
    </div>
  )
}
export default Product;