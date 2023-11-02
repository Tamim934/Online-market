import React, { useEffect } from 'react'
import ProductDetalis from '../../components/Productsicons/ProductDetalis'
import axios from 'axios';

const Home = () => {
  
  const Api = "http://localhost:3000/products";
  async function getData() {
    try {
      const { data } = await axios.get(Api);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  },[])
  return (
    <div>
      <ProductDetalis/>
    </div>
  )
}

export default Home