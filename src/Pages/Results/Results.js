import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import { useParams } from 'react-router-dom';
import { BaseUrl } from '../../API/ApiEndPoints';
import ProductCard from '../../components/Product/ProductCard';
import classes from './results.module.css';
import axios from 'axios';
const Results = () => { 
  const [results, setResults] = useState([]);
  const { catagoryName } = useParams();
  // console.log(catagoryName);
  useEffect(() => {
    axios.get(`${BaseUrl}/products/category/${catagoryName}`)
      .then((response) => {
        setResults(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  },[]);
    
    return (
        <Layout>
        <section>
          <h1 style={{padding:"30px"}}>Results </h1>
          <p style={{ padding: "30px" }}>Catagory</p>
          <hr />
          <div className={classes.products_container}>
            {results?.map((product) => (
              <ProductCard
                key={product.id}
                product={product} />
            ))
              } 
          </div>
         </section>
        </Layout>
    );
}
export default Results;