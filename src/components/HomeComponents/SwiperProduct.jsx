import React, { useRef, useState } from 'react';
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

export default function SwiperProduct() {
    return (
        <div className='w-[]'>
            <Swiper
                slidesPerView={4}
                centeredSlides={false}
                // spaceBetween={10}
                grabCursor={true}
                // pagination={{
                //     clickable: false,
                // }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <div className="bg-[#000]">
                    <SwiperSlide>
                        <ProductCard img={jostic} name="HAVIT HV-G92 Gamepad" price="$120" />
                    </SwiperSlide>
                </div>
                <div className="bg-[#000]">
                    <SwiperSlide>
                        <ProductCard img={chair} name="HAVIT HV-G92 Gamepad" price="$120" />
                    </SwiperSlide>
                </div>
                <div className="bg-[#000]">
                    <SwiperSlide>
                        <ProductCard img={TV} name="HAVIT HV-G92 Gamepad" price="$120" />
                    </SwiperSlide>
                </div>
                <div className="bg-[#000]">
                    <SwiperSlide>
                        <ProductCard img={chair} name="HAVIT HV-G92 Gamepad" price="$120" />
                    </SwiperSlide>
                </div>
                <div className="bg-[#000]">
                    <SwiperSlide>
                        <ProductCard img={jostic} name="HAVIT HV-G92 Gamepad" price="$120" />
                    </SwiperSlide>
                </div>
                <div className="bg-[#000]">
                    <SwiperSlide>
                        <ProductCard img={chair} name="HAVIT HV-G92 Gamepad" price="$120" />
                    </SwiperSlide>
                </div>
                <div className="bg-[#000]">
                    <SwiperSlide>
                        <ProductCard img={TV} name="HAVIT HV-G92 Gamepad" price="$120" />
                    </SwiperSlide>
                </div>
                <div className="bg-[#000]">
                    <SwiperSlide>
                        <ProductCard img={chair} name="HAVIT HV-G92 Gamepad" price="$120" />
                    </SwiperSlide>
                </div>

            </Swiper>
        </div>
    );
}
