import React,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import { BaseUrl } from '../../API/ApiEndPoints';
import ProductCard from '../../components/Product/ProductCard';
import axios from 'axios';
const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
   axios.get(`${BaseUrl}/products/${productId}`)
   .then((response) => {
     setProduct(response.data);
     console.log(response.data);
   }).catch((error) => {
     console.log(error);
    });
   }, []);
    
  return (
    <Layout>
        <ProductCard
        product={product}
      />
    </Layout>
  );
  
}
export default ProductDetail;