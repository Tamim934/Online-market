import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Catagorepage = () => {
  const location = useLocation();
  const id = location.state.id;
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const api=`http://localhost:3000/api/categories/${id}`;

  const getData = async () => {
    try {
      const { data } = await axios.get(api);
      console.log(data)
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData().then(data => {
      setCategory(data);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <div>
      {category ? (
        <>
          <h1>{category.name}</h1>
          <img src={category.img.replace(/\\/g, '/')} alt={category.name} />
          <p>{category.description}</p>
          <p>Price: ${category.price}</p>
        </>
      ) : (
        <p>No category found</p>
      )}
    </div>
  );
}

export default Catagorepage;



