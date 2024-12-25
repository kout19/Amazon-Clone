import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import classes from './product.module.css';
import axios from 'axios';
import Loader from '../Loader/Loader';
const Product = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((res) => {
        setProducts(res.data);
        setIsLoading(false);
      }).catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);
  return(
    <>
      {isLoading ? (<Loader />) : (
      <section className={classes.products_container}>
        {products && products.map((singleProduct) => (
        <ProductCard
          key={singleProduct.id}
          product={singleProduct}
        />
      ))
          }
      </section>
      )
      }  
    </>
  )
}
export default Product;