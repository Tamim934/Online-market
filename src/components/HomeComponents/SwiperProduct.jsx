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

console.log(products);

    return (
        
        <div className='w-[]'>
        <Swiper
            slidesPerView={4}
            centeredSlides={false}
            grabCursor={true}
            modules={[Pagination]}
            className="mySwiper"
        >
            {products.map((product) => (
                <div key={product.id} className="bg-[#000]">
                
                    <SwiperSlide>
                        <ProductCard 
                            img={product.media[0]?.jpg} 
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
