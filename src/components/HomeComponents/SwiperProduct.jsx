import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
// img 
import jostic from '../../assets/homeImg/jostic.svg'

import keyBoard from '../../assets/homeImg/keyboard.svg'
import TV from '../../assets/homeImg/TV.svg'
import chair from '../../assets/homeImg/chair.svg'
import Rating from './Rating'
import ProductCard from './ProductCard';
import { Try } from '@mui/icons-material';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function SwiperProduct() {
    
    const { category } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const api=`http://localhost:3000/api/products?category=${category}`;

const getData = async () => {
    try {
        const { data } = await axios.get(api);
        return data;
        console.log(data)
    } catch (error) {
        console.error(error);
    }
};


useEffect(() => {
    getData().then(data => {
      setProducts(data);
      setLoading(false);
    });
  }, [category]);


if (loading) {
    return <div>Loading...</div>; 
}

console.log(products[1]);

    return (
        
        <div className='w-[]'>
          <Swiper
        // slidesPerView={4}
        // slidesPerView={1}
        // spaceBetween={10}
        centeredSlides={false}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        // spaceBetween={10}
        grabCursor={true}
        // pagination={{
        //     clickable: false,
        // }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {products?.map((product,i) => (
    <div key={product.id} >
        <SwiperSlide>
            <ProductCard 
                img={"http://localhost:3000/" + products[i]?.media[0]?.src} 
                name={product.name} 
                price={`$${product.price}`} 
            />
        </SwiperSlide>
    </div>
))}
</Swiper>
</div>

    );
}
