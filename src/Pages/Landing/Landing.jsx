import React from 'react';
import Carousel from '../../components/Carousel/Carousel';
import Catagory from '../../components/Catagory/Catagory';
import Product from '../../components/Product/Product';
import Layout from '../../components/Layout/Layout';
const Landing = () => { 
  return (
    <Layout>
       <Carousel />
      <Catagory />
      <Product/>
    </Layout>
  );
};
export default Landing;