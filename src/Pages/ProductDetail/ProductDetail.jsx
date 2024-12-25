import React,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import { BaseUrl } from '../../API/ApiEndPoints';
import ProductCard from '../../components/Product/ProductCard';
import Loader from '../../components/Loader/Loader';
import axios from 'axios';
const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
   axios.get(`${BaseUrl}/products/${productId}`)
   .then((response) => {
     setProduct(response.data);
     setLoading(false);
   }).catch((error) => {
     console.log(error);
     setLoading(false);
    });
   }, []);
    
  return (
    <Layout>
      {loading ? (<Loader />)
        : (  <ProductCard
        product={product}
      />)
      }
    </Layout>
  );
  
}
export default ProductDetail;