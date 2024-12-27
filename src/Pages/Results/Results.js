import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import { useParams } from 'react-router-dom';
import { BaseUrl } from '../../API/ApiEndPoints';
import ProductCard from '../../components/Product/ProductCard';
import classes from './results.module.css';
import Loader from '../../components/Loader/Loader';
import axios from 'axios';
import CurrencyFormat from '../../components/CurrencyFormat/CurrencyFormat';
const Results = () => { 
  const [results, setResults] = useState([]);
  const { catagoryName } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios.get(`${BaseUrl}/products/category/${catagoryName}`)
      .then((response) => {
        setResults(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  },[]);
    
    return (
      <Layout>
        {isLoading ? (<Loader />) : (
          <section>
          <h1 style={{padding:"30px"}}>Results </h1>
          <p style={{ padding: "30px" }}>Catagory</p>
          <hr />
          <div className={classes.products_container}>
            {results?.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                renderAddBtn={true}
              />
            ))
              } 
          </div>
         </section>
        )}
        
        </Layout>
    );
}
export default Results;